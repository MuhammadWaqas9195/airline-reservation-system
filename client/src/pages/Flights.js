function Flights() {

  const flights = [
    {
      id: 1,
      from: "New York",
      to: "Los Angeles (LAX)",
      class: "Economy",
      price: "$299"
    },
    {
      id: 2,
      from: "New York",
      to: "Chicago (ORD)",
      class: "Business",
      price: "$599"
    },
    {
      id: 3,
      from: "New York",
      to: "Miami (MIA)",
      class: "Economy",
      price: "$349"
    },
    {
      id: 4,
      from: "New York",
      to: "Seattle (SEA)",
      class: "First Class",
      price: "$899"
    },
    {
      id: 5,
      from: "New York",
      to: "Dallas (DFW)",
      class: "Economy",
      price: "$329"
    },
    {
      id: 6,
      from: "New York",
      to: "Las Vegas (LAS)",
      class: "Business",
      price: "$649"
    },
    {
      id: 7,
      from: "New York",
      to: "Boston (BOS)",
      class: "Economy",
      price: "$249"
    },
    {
      id: 8,
      from: "New York",
      to: "Denver (DEN)",
      class: "Business",
      price: "$579"
    },
    {
      id: 9,
      from: "New York",
      to: "Orlando (MCO)",
      class: "Economy",
      price: "$319"
    },
    {
      id: 10,
      from: "New York",
      to: "San Francisco (SFO)",
      class: "First Class",
      price: "$999"
    },
    {
      id: 11,
      from: "New York",
      to: "Atlanta (ATL)",
      class: "Economy",
      price: "$289"
    },
    {
      id: 12,
      from: "New York",
      to: "Honolulu (HNL)",
      class: "First Class",
      price: "$1299"
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
        ✈ Popular Destinations
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Explore our most popular destinations and reserve your next flight
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

            <p>
              <strong>From:</strong> {flight.from}
            </p>

            <p>
              <strong>To:</strong> {flight.to}
            </p>

            <p>
              <strong>Class:</strong> {flight.class}
            </p>

            <p>
              <strong>Price:</strong> {flight.price}
            </p>

            <button
              onClick={() => {

                const user =
                  JSON.parse(
                    localStorage.getItem("user")
                  );

                if (user) {

                  window.location.href =
                    "/reservations";

                } else {

                  alert(
                    "Please login before making a reservation."
                  );

                  window.location.href =
                    "/login";
                }

              }}
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