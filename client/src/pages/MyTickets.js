import { useEffect, useState } from "react";

function MyTickets() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    fetch(
      `http://localhost:5000/tickets/${user.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
      });

  }, []);

  const deleteTicket = async (id) => {

    const response = await fetch(
      `http://localhost:5000/tickets/${id}`,
      {
        method: "DELETE"
      }
    );

    const data = await response.json();

    alert(data.message);

    window.location.reload();
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        padding: "40px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#003366",
          marginBottom: "40px"
        }}
      >
        🎫 My Tickets
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}
      >

        {tickets.map((ticket) => (

          <div
            key={ticket.id}
            style={{
              backgroundColor: "white",
              width: "320px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >

            <h2
              style={{
                color: "#003366",
                textAlign: "center"
              }}
            >
              Ticket #{ticket.id}
            </h2>

            <hr />

            <p>
              <strong>From:</strong>{" "}
              {ticket.departCity}
            </p>

            <p>
              <strong>To:</strong>{" "}
              {ticket.destination}
            </p>

            <p>
              <strong>Passengers:</strong>{" "}
              {ticket.passengers}
            </p>

            <p>
              <strong>Class:</strong>{" "}
              {ticket.class}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {ticket.date}
            </p>

            <div
              style={{
                textAlign: "center",
                marginTop: "20px"
              }}
            >
              <button
                onClick={() =>
                  deleteTicket(ticket.id)
                }
              >
                Cancel Ticket
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyTickets;