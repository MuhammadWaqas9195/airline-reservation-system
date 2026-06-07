import { useState } from "react";

function Reservations() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const states = [
    "Alabama","Alaska","Arizona","Arkansas","California",
    "Colorado","Connecticut","Delaware","Florida","Georgia",
    "Hawaii","Idaho","Illinois","Indiana","Iowa",
    "Kansas","Kentucky","Louisiana","Maine","Maryland",
    "Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
    "Montana","Nebraska","Nevada","New Hampshire","New Jersey",
    "New Mexico","New York","North Carolina","North Dakota","Ohio",
    "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
    "South Dakota","Tennessee","Texas","Utah","Vermont",
    "Virginia","Washington","West Virginia","Wisconsin","Wyoming"
  ];

  const [formData, setFormData] =
    useState({
      from: "New York",
      to: "",
      date: "",
      passengers: "",
      travelClass: ""
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleReserve = async () => {

    if (
      !formData.to ||
      !formData.date ||
      !formData.passengers ||
      !formData.travelClass
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    try {

      const response =
        await fetch(
          "http://localhost:5000/reserve",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              ...formData,
              userID: user.id
            })
          }
        );

      const data =
        await response.json();

      alert(data.message);

      window.location.href =
        "/tickets";

    } catch (error) {

      alert(
        "Unable to create reservation."
      );

    }

  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 5px 20px rgba(0,0,0,.15)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#003366"
          }}
        >
          ✈ Flight Reservation
        </h1>

        <h3
          style={{
            textAlign: "center",
            color: "#666"
          }}
        >
          Welcome {user?.name}
        </h3>

        <br />

        <input
          name="from"
          value={formData.from}
          readOnly
          style={{
            width: "100%",
            padding: "12px",
            boxSizing: "border-box"
          }}
        />

        <br /><br />

        <select
          name="to"
          value={formData.to}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px"
          }}
        >
          <option value="">
            Select Destination
          </option>

          {states.map(
            (state) => (
              <option
                key={state}
                value={state}
              >
                {state}
              </option>
            )
          )}
        </select>

        <br /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            boxSizing: "border-box"
          }}
        />

        <br /><br />

        <select
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px"
          }}
        >
          <option value="">
            Select Passengers
          </option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br /><br />

        <select
          name="travelClass"
          value={formData.travelClass}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px"
          }}
        >
          <option value="">
            Select Class
          </option>

          <option value="Economy">
            Economy
          </option>

          <option value="Business">
            Business
          </option>

          <option value="First">
            First
          </option>
        </select>

        <br /><br />

        <h2
          style={{
            textAlign: "center",
            color: "green"
          }}
        >
          Estimated Price: $
          {formData.passengers
            ? formData.passengers * 299
            : 299}
        </h2>

        <div
          style={{
            backgroundColor: "#eef5ff",
            padding: "8px",
            borderRadius: "10px",
            marginTop: "15px",
            marginBottom: "20px"
          }}
        >
          <h3>
            Reservation Summary
          </h3>

          <p style={{ margin: "5px 0" }}>
            <strong>From:</strong>{" "}
            {formData.from}
          </p>

          <p style={{ margin: "5px 0" }}>
            <strong>To:</strong>{" "}
            {formData.to || "-"}
          </p>

          <p style={{ margin: "5px 0" }}>
            <strong>Passengers:</strong>{" "}
            {formData.passengers || "-"}
          </p>

          <p style={{ margin: "5px 0" }}>
            <strong>Class:</strong>{" "}
            {formData.travelClass
              ? formData.travelClass + " Class"
              : "-"}
          </p>

          <p style={{ margin: "5px 0" }}>
            <strong>Date:</strong>{" "}
            {formData.date || "-"}
          </p>

          <p style={{ margin: "5px 0" }}>
            <strong>Estimated Fare:</strong>{" "}
            $
            {formData.passengers
              ? formData.passengers * 299
              : 299}
          </p>

        </div>

        <div
          style={{
            textAlign: "center"
          }}
        >
          <button
            onClick={handleReserve}
            style={{
              backgroundColor:
                "#003366",
              color: "white",
              border: "none",
              padding:
                "12px 25px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Reserve Flight
          </button>
        </div>

      </div>
    </div>
  );
}

export default Reservations;