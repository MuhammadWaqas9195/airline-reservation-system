import { useState } from "react";

function FlightStatus() {

  const flights =
    JSON.parse(
      localStorage.getItem("adminFlights")
    ) || [];

  const [selectedFlight,
    setSelectedFlight] =
    useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "40px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#003366"
        }}
      >
        ✈ Flight Status
      </h1>

      <p
        style={{
          textAlign: "center"
        }}
      >
        Click a flight to view details
      </p>

      <table
        style={{
          width: "100%",
          backgroundColor: "white",
          borderCollapse: "collapse",
          marginTop: "30px"
        }}
      >
        <thead>

          <tr>

            <th style={headerStyle}>
              Flight Number
            </th>

            <th style={headerStyle}>
              Airline
            </th>

            <th style={headerStyle}>
              Destination
            </th>

            <th style={headerStyle}>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {flights.map(
            (flight, index) => (

              <tr
                key={index}
                onClick={() =>
                  setSelectedFlight(
                    flight
                  )
                }
                style={{
                  cursor: "pointer"
                }}
              >

                <td style={cellStyle}>
                  {flight.flightNumber}
                </td>

                <td style={cellStyle}>
                  {flight.airline}
                </td>

                <td style={cellStyle}>
                  {flight.destination}
                </td>

                <td
                  style={{
                    ...cellStyle,
                    color:
                      flight.status ===
                      "On Time"
                        ? "green"
                        : "red"
                  }}
                >
                  {flight.status}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

      {selectedFlight && (

        <div
          style={{
            backgroundColor: "white",
            marginTop: "40px",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >

          <h2
            style={{
              color: "#003366"
            }}
          >
            Flight Details for{" "}
            {selectedFlight.flightNumber}
          </h2>

          <hr />

          <p>
            <strong>Airline:</strong>{" "}
            {selectedFlight.airline}
          </p>

          <p>
            <strong>Destination:</strong>{" "}
            {selectedFlight.destination}
          </p>

          <p>
            <strong>Scheduled Departure:</strong>{" "}
            {selectedFlight.scheduledDeparture}
          </p>

          <p>
            <strong>Estimated Departure:</strong>{" "}
            {selectedFlight.estimatedDeparture}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {selectedFlight.status}
          </p>

          <p>
            <strong>Gate:</strong>{" "}
            {selectedFlight.gate}
          </p>

          <p>
            <strong>Terminal:</strong>{" "}
            {selectedFlight.terminal}
          </p>

          <p>
            <strong>Plane Model:</strong>{" "}
            {selectedFlight.planeModel}
          </p>

          <p>
            <strong>Remarks:</strong>{" "}
            {selectedFlight.remarks}
          </p>

        </div>

      )}

    </div>
  );
}

const headerStyle = {
  backgroundColor: "#003366",
  color: "white",
  padding: "12px"
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd"
};

export default FlightStatus;