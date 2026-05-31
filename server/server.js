const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(
  "./database/users.sqlite",
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to users.sqlite");
    }
  }
);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.get("/users", (req, res) => {
  db.all(
    "SELECT * FROM users",
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json(rows);
    }
  );
});

app.post("/login", (req, res) => {

  const { username, password } =
    req.body;

  db.get(
    "SELECT * FROM users WHERE name = ?",
    [username],
    async (err, user) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      if (!user) {
        return res.json({
          success: false,
          message: "User does not exist"
        });
      }

      const match =
        await bcrypt.compare(
          password,
          user.password
        );

      if (match) {

        res.json({
          success: true,
          message: "Login successful",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.city,
            state: user.state,
            zip: user.zip
          }
        });

      } else {

        res.json({
          success: false,
          message: "Incorrect password"
        });

      }
    }
  );
});

app.post("/signup", async (req, res) => {

  const {
    name,
    city,
    state,
    zip,
    email,
    password
  } = req.body;

  if (
    !name ||
    !city ||
    !state ||
    !zip ||
    !email ||
    !password
  ) {
    return res.json({
      success: false,
      message: "All fields are required"
    });
  }

  db.get(
    "SELECT * FROM users WHERE name = ? OR email = ?",
    [name, email],
    async (err, user) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      if (user) {
        return res.json({
          success: false,
          message:
            "Username or email already exists"
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

      db.run(
        `INSERT INTO users
        (name, password, city, state, zip, email)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          name,
          hashedPassword,
          city,
          state,
          zip,
          email
        ],
        function (err) {

          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message
            });
          }

          res.json({
            success: true,
            message:
              "Account created successfully"
          });
        }
      );
    }
  );
});

app.post("/reserve", (req, res) => {

  const {
    userID,
    from,
    to,
    date,
    passengers,
    travelClass
  } = req.body;

  if (
    !userID ||
    !from ||
    !to ||
    !date ||
    !passengers ||
    !travelClass
  ) {
    return res.json({
      success: false,
      message: "All fields are required"
    });
  }

  const ticketsDb =
    new sqlite3.Database(
      "./database/tickets.sqlite"
    );

  ticketsDb.run(
    `INSERT INTO tickets
    (userID, departCity, destination, passengers, class, date)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      userID,
      from,
      to,
      passengers,
      travelClass,
      date
    ],
    function (err) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      res.json({
        success: true,
        message:
          "Flight reserved successfully"
      });
    }
  );
});

app.get("/tickets/:userID", (req, res) => {

  const ticketsDb =
    new sqlite3.Database(
      "./database/tickets.sqlite"
    );

  ticketsDb.all(
    "SELECT * FROM tickets WHERE userID = ?",
    [req.params.userID],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json(rows);
    }
  );
});

app.delete("/tickets/:id", (req, res) => {

  const ticketId =
    req.params.id;

  const ticketsDb =
    new sqlite3.Database(
      "./database/tickets.sqlite"
    );

  ticketsDb.run(
    "DELETE FROM tickets WHERE id = ?",
    [ticketId],
    function (err) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      res.json({
        success: true,
        message:
          "Ticket cancelled successfully"
      });
    }
  );
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});