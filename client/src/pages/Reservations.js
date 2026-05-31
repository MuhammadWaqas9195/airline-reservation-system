import { useState } from "react";

function Reservations() {

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

  const [formData, setFormData] = useState({
    from: "New York",
    to: "",
    date: "",
    passengers: "",
    travelClass: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReserve = async () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    alert("Please login first");
    return;
  }

  if (
    !formData.to ||
    !formData.date ||
    !formData.passengers ||
    !formData.travelClass
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/reserve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          userID: user.id
        })
      }
    );

    const data = await response.json();

    alert(data.message);

    window.location.href = "/tickets";

  } catch (error) {

    console.error(error);

    alert(
      "Unable to create reservation. Please try again."
    );
  }
};

  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "450px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "#003366",
            marginBottom: "25px"
          }}
        >
          Flight Reservation
        </h1>

        <input
          name="from"
          value={formData.from}
          readOnly
        />

        <br /><br />

        <select
          name="to"
          value={formData.to}
          onChange={handleChange}
        >
          <option value="">
            Select Destination
          </option>

          {states.map((state) => (
            <option
              key={state}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
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
            First Class
          </option>
        </select>

        <br /><br />

        <h3
          style={{
            color: "green"
          }}
        >
          Estimated Price: $
          {formData.passengers
            ? formData.passengers * 299
            : 299}
        </h3>

        <button
          onClick={handleReserve}
        >
          Reserve Flight
        </button>

      </div>
    </div>
  );
}

export default Reservations;