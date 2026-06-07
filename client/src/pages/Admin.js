import { useState } from "react";

function Admin() {

  const feedbacks =
    JSON.parse(
      localStorage.getItem("feedbacks")
    ) || [];

  const defaultFlights = [
  {
    flightNumber: "PA101",
    airline: "Passage Airlines",
    destination: "Los Angeles (LAX)",
    scheduledDeparture: "7:00 AM",
    estimatedDeparture: "7:00 AM",
    status: "On Time",
    gate: "A5",
    terminal: "1",
    planeModel: "Boeing 737 MAX",
    remarks: "-"
  },
  {
    flightNumber: "PA202",
    airline: "Passage Airlines",
    destination: "Chicago (ORD)",
    scheduledDeparture: "8:30 AM",
    estimatedDeparture: "8:45 AM",
    status: "Delayed",
    gate: "B12",
    terminal: "2",
    planeModel: "Airbus A320",
    remarks: "Weather Delay"
  },
  {
    flightNumber: "PA303",
    airline: "Passage Airlines",
    destination: "Miami (MIA)",
    scheduledDeparture: "10:00 AM",
    estimatedDeparture: "10:00 AM",
    status: "Boarding",
    gate: "C3",
    terminal: "3",
    planeModel: "Boeing 757",
    remarks: "Boarding Now"
  },
  {
    flightNumber: "PA404",
    airline: "Passage Airlines",
    destination: "Denver (DEN)",
    scheduledDeparture: "11:15 AM",
    estimatedDeparture: "11:45 AM",
    status: "Delayed",
    gate: "D7",
    terminal: "1",
    planeModel: "Airbus A321",
    remarks: "Maintenance Check"
  },
  {
    flightNumber: "PA505",
    airline: "Passage Airlines",
    destination: "Seattle (SEA)",
    scheduledDeparture: "1:00 PM",
    estimatedDeparture: "1:00 PM",
    status: "On Time",
    gate: "E4",
    terminal: "2",
    planeModel: "Boeing 737",
    remarks: "-"
  },
  {
    flightNumber: "PA606",
    airline: "Passage Airlines",
    destination: "Orlando (MCO)",
    scheduledDeparture: "2:20 PM",
    estimatedDeparture: "2:20 PM",
    status: "Boarding",
    gate: "F2",
    terminal: "3",
    planeModel: "Boeing 787",
    remarks: "Final Call"
  },
  {
    flightNumber: "PA707",
    airline: "Passage Airlines",
    destination: "Dallas (DFW)",
    scheduledDeparture: "3:45 PM",
    estimatedDeparture: "3:45 PM",
    status: "On Time",
    gate: "G8",
    terminal: "2",
    planeModel: "Airbus A220",
    remarks: "-"
  },
  {
    flightNumber: "PA808",
    airline: "Passage Airlines",
    destination: "Las Vegas (LAS)",
    scheduledDeparture: "5:00 PM",
    estimatedDeparture: "5:40 PM",
    status: "Delayed",
    gate: "H1",
    terminal: "1",
    planeModel: "Boeing 737 MAX",
    remarks: "Late Arrival"
  },
  {
    flightNumber: "PA909",
    airline: "Passage Airlines",
    destination: "San Francisco (SFO)",
    scheduledDeparture: "6:15 PM",
    estimatedDeparture: "6:15 PM",
    status: "On Time",
    gate: "J3",
    terminal: "2",
    planeModel: "Airbus A321",
    remarks: "-"
  },
  {
    flightNumber: "PA1001",
    airline: "Passage Airlines",
    destination: "Boston (BOS)",
    scheduledDeparture: "8:00 PM",
    estimatedDeparture: "8:00 PM",
    status: "Boarding",
    gate: "K6",
    terminal: "1",
    planeModel: "Boeing 757",
    remarks: "Boarding Now"
  }
];

  let savedFlights =
    JSON.parse(
      localStorage.getItem("adminFlights")
    );

  if (!savedFlights || savedFlights.length === 0) {

    savedFlights = defaultFlights;

    localStorage.setItem(
      "adminFlights",
      JSON.stringify(defaultFlights)
    );
  }

  const [flightNumber, setFlightNumber] =
    useState("");

  const [airline, setAirline] =
    useState("");

  const [destination, setDestination] =
    useState("");

  const [status, setStatus] =
    useState("");

    const [scheduledDeparture, setScheduledDeparture] =
  useState("");

const [estimatedDeparture, setEstimatedDeparture] =
  useState("");

const [gate, setGate] =
  useState("");

const [terminal, setTerminal] =
  useState("");

const [planeModel, setPlaneModel] =
  useState("");

const [remarks, setRemarks] =
  useState("");

  const addFlight = () => {

    const flights =
      JSON.parse(
        localStorage.getItem("adminFlights")
      ) || [];

    flights.push({
  flightNumber,
  airline,
  destination,
  scheduledDeparture,
  estimatedDeparture,
  status,
  gate,
  terminal,
  planeModel,
  remarks
});

    localStorage.setItem(
      "adminFlights",
      JSON.stringify(flights)
    );

    alert("Flight Added Successfully");

    window.location.reload();
  };

  const deleteFlight = (index) => {

    const flights =
      JSON.parse(
        localStorage.getItem("adminFlights")
      ) || [];

    flights.splice(index, 1);

    localStorage.setItem(
      "adminFlights",
      JSON.stringify(flights)
    );

    window.location.reload();
  };

  const flights =
    JSON.parse(
      localStorage.getItem("adminFlights")
    ) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#888"
      }}
    >
      <div
        style={{
          width: "98%",
          maxWidth: "1400px",
          margin: "auto",
          background:
            "rgba(0,0,0,.85)",
          padding: "30px",
          borderRadius: "20px",
          color: "white"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Admin Dashboard
        </h1>


        <h2 style={{ color: "red" }}>
          Add Flight
        </h2>

        <input
          placeholder="Flight Number"
          value={flightNumber}
          onChange={(e) =>
            setFlightNumber(e.target.value)
          }
        />

        <br /><br />

        <input
          placeholder="Airline"
          value={airline}
          onChange={(e) =>
            setAirline(e.target.value)
          }
        />

        <br /><br />

        <input
          placeholder="Destination"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
        />

        <br /><br />

        <input
  placeholder="Scheduled Departure"
  value={scheduledDeparture}
  onChange={(e) =>
    setScheduledDeparture(
      e.target.value
    )
  }
/>

<br /><br />

<input
  placeholder="Estimated Departure"
  value={estimatedDeparture}
  onChange={(e) =>
    setEstimatedDeparture(
      e.target.value
    )
  }
/>

<br /><br />

<input
  placeholder="Gate"
  value={gate}
  onChange={(e) =>
    setGate(
      e.target.value
    )
  }
/>

<br /><br />

<input
  placeholder="Terminal"
  value={terminal}
  onChange={(e) =>
    setTerminal(
      e.target.value
    )
  }
/>

<br /><br />

<input
  placeholder="Plane Model"
  value={planeModel}
  onChange={(e) =>
    setPlaneModel(
      e.target.value
    )
  }
/>

<br /><br />

<input
  placeholder="Remarks"
  value={remarks}
  onChange={(e) =>
    setRemarks(
      e.target.value
    )
  }
/>

<br /><br />

        <input
          placeholder="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        />

        <br /><br />

        <button onClick={addFlight}>
          Add Flight
        </button>

        <hr />

        <h2>Flights</h2>

        <table
          style={{
            width: "100%",
            background: "white",
            color: "black",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr>
              <th style={headerStyle}>Flight</th>
              <th style={headerStyle}>Airline</th>
              <th style={headerStyle}>Destination</th>
              <th style={headerStyle}>Status</th>
              <th style={headerStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {flights.map(
              (flight, index) => (
                <tr key={index}>
                  <td style={cellStyle}>
                    {flight.flightNumber}
                  </td>

                  <td style={cellStyle}>
                    {flight.airline}
                  </td>

                  <td style={cellStyle}>
                    {flight.destination}
                  </td>

                  <td style={cellStyle}>
                    {flight.status}
                  </td>

                  <td style={cellStyle}>

  <button
  onClick={() => {

    setFlightNumber(
      flight.flightNumber
    );

    setAirline(
      flight.airline
    );

    setDestination(
      flight.destination
    );

    setStatus(
      flight.status
    );

    setScheduledDeparture(
      flight.scheduledDeparture || ""
    );

    setEstimatedDeparture(
      flight.estimatedDeparture || ""
    );

    setGate(
      flight.gate || ""
    );

    setTerminal(
      flight.terminal || ""
    );

    setPlaneModel(
      flight.planeModel || ""
    );

    setRemarks(
      flight.remarks || ""
    );

    alert(
      "Flight loaded into form. Update the information and click Add Flight."
    );

  }}
  style={{
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    marginRight: "10px"
  }}
>
  Edit
</button>

  <button
    onClick={() =>
      deleteFlight(index)
    }
    style={{
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "5px"
    }}
  >
    Delete
  </button>

</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <hr />

        <h2
          style={{
            color: "#ffd54f"
          }}
        >
          User Feedbacks
        </h2>

        <table
          style={{
            width: "100%",
            background: "white",
            color: "black",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr>
              <th style={headerStyle}>
                Name
              </th>

              <th style={headerStyle}>
                Email
              </th>

              <th style={headerStyle}>
                Feedback
              </th>
            </tr>
          </thead>

          <tbody>

            {feedbacks.length === 0 ? (

              <tr>
                <td
                  colSpan="3"
                  style={{
                    padding: "20px",
                    textAlign: "center"
                  }}
                >
                  No Feedback Yet
                </td>
              </tr>

            ) : (

              feedbacks.map(
                (item, index) => (

                  <tr key={index}>

                    <td style={cellStyle}>
                      {item.name}
                    </td>

                    <td style={cellStyle}>
                      {item.email}
                    </td>

                    <td style={cellStyle}>
                      {item.feedback}
                    </td>

                  </tr>

                )
              )

            )}

          </tbody>
        </table>

        <br />

        <button
          onClick={() => {
            window.location.href =
              "/";
          }}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

const headerStyle = {
  background: "#003366",
  color: "white",
  padding: "12px"
};

const cellStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};

export default Admin;