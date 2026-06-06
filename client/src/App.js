import "./App.css";
import AdminLogin from "./pages/AdminLogin";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import MyTickets from "./pages/MyTickets";
import FlightStatus from "./pages/FlightStatus";
import Feedback from "./pages/Feedback";
import Admin from "./pages/Admin";

function App() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>Passage Airline</h2>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/flights">
              Flights
            </Link>
          </li>

          <li>
            <Link to="/reservations">
              Reservations
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/tickets">
                  My Tickets
                </Link>
              </li>

              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <a
                  href="/"
                  onClick={() => {
                    localStorage.removeItem(
                      "user"
                    );
                  }}
                  style={{
                    color: "white",
                    textDecoration:
                      "none"
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}

        </ul>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/flights"
          element={<Flights />}
        />

        <Route
          path="/reservations"
          element={<Reservations />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/tickets"
          element={<MyTickets />}
        />

        <Route
          path="/flightstatus"
          element={<FlightStatus />}
        />

        <Route
          path="/feedback"
          element={<Feedback />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
        path="/adminlogin"
        element={<AdminLogin />}
      />

      </Routes>

    </BrowserRouter>
  );
}

export default App;