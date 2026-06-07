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

      {tickets.length === 0 ? (

        <h2
          style={{
            textAlign: "center",
            color: "#666"
          }}
        >
          No Tickets Found
        </h2>

      ) : (

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px"
          }}
        >

          {tickets.map((ticket) => (

            <div
              key={ticket.id}
              style={{
                backgroundColor: "white",
                width: "350px",
                padding: "20px",
                borderRadius: "15px",
                borderTop: "8px solid #003366",
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
                <strong>Booking Ref:</strong>{" "}
                PA{ticket.id}X
              </p>

              <p>
                <strong>Airline:</strong>{" "}
                Passage Airlines
              </p>

              <p>
                <strong>Flight:</strong>{" "}
                PA{ticket.id}
              </p>

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

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color: "green",
                    fontWeight: "bold"
                  }}
                >
                  Confirmed
                </span>
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
                  style={{
                    backgroundColor: "#003366",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}
                >
                  Cancel Ticket
                </button>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyTickets;