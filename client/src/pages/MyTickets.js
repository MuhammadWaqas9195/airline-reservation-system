import { useEffect, useState } from "react";

function MyTickets() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/tickets")
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
    <div className="hero">

      <h1>My Tickets</h1>

      {tickets.map((ticket) => (

        <div
          key={ticket.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px"
          }}
        >

          <h3>
            Ticket #{ticket.id}
          </h3>

          <p>
            From: {ticket.departCity}
          </p>

          <p>
            To: {ticket.destination}
          </p>

          <p>
            Passengers: {ticket.passengers}
          </p>

          <p>
            Class: {ticket.class}
          </p>

          <p>
            Date: {ticket.date}
          </p>

          <button
            onClick={() =>
              deleteTicket(ticket.id)
            }
          >
            Cancel Ticket
          </button>

        </div>

      ))}

    </div>
  );
}

export default MyTickets;