import { useState } from "react";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {

    const response = await fetch(
      "http://localhost:5000/signup",
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

      <h1>Sign Up</h1>

      <input
        name="name"
        placeholder="Username"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="state"
        placeholder="State"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="zip"
        placeholder="Zip"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSignup}>
        Create Account
      </button>

    </div>
  );
}

export default Signup;