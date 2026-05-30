import { useState } from "react";

function Reservations() {

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

    const response = await fetch(
      "http://localhost:5000/reserve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="hero">

      <h1>Book Flight</h1>

      <input
        name="from"
        value={formData.from}
        readOnly
      />

      <br /><br />

      <input
        name="to"
        placeholder="Destination State"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="passengers"
        placeholder="Passengers"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="travelClass"
        placeholder="Economy / Business / First"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleReserve}>
        Reserve Flight
      </button>

    </div>
  );
}

export default Reservations;