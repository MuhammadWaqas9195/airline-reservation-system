function Flights() {

  const flights = [
    {
      id: 1,
      from: "New York",
      to: "California",
      class: "Economy"
    },
    {
      id: 2,
      from: "New York",
      to: "Texas",
      class: "Business"
    },
    {
      id: 3,
      from: "New York",
      to: "Florida",
      class: "First"
    },
    {
      id: 4,
      from: "New York",
      to: "Illinois",
      class: "Economy"
    }
  ];

  return (
    <div className="hero">

      <h1>Available Flights</h1>

      <p>
        Search and view available flights
      </p>

      {flights.map((flight) => (

        <div
          key={flight.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >

          <h3>
            Flight #{flight.id}
          </h3>

          <p>
            From: {flight.from}
          </p>

          <p>
            To: {flight.to}
          </p>

          <p>
            Class: {flight.class}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Flights;