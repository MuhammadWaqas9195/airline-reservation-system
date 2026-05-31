function Flights() {

  const flights = [
    {
      id: 1,
      from: "New York",
      to: "California",
      class: "Economy",
      price: "$299"
    },
    {
      id: 2,
      from: "New York",
      to: "Texas",
      class: "Business",
      price: "$599"
    },
    {
      id: 3,
      from: "New York",
      to: "Florida",
      class: "Economy",
      price: "$349"
    },
    {
      id: 4,
      from: "New York",
      to: "Alaska",
      class: "First Class",
      price: "$899"
    }
  ];

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
          color: "#003366"
        }}
      >
        ✈ Available Flights
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Search and reserve flights across the United States
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        {flights.map((flight) => (
          <div
            key={flight.id}
            style={{
              backgroundColor: "white",
              width: "300px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              textAlign: "center"
            }}
          >
            <h2
              style={{
                color: "#003366"
              }}
            >
              Flight #{flight.id}
            </h2>

            <hr />

            <p><strong>From:</strong> {flight.from}</p>
            <p><strong>To:</strong> {flight.to}</p>
            <p><strong>Class:</strong> {flight.class}</p>
            <p><strong>Price:</strong> {flight.price}</p>

            <button
              onClick={() =>
                window.location.href =
                "/reservations"
              }
            >
              Reserve Flight
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flights;