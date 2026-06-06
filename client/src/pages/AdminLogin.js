import { useState } from "react";

function AdminLogin() {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      window.location.href =
        "/admin";

    } else {

      alert(
        "Invalid Admin Credentials"
      );

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          width: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center"
        }}
      >

        <h1>
          Admin Login
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          style={{
            width: "90%",
            padding: "10px"
          }}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{
            width: "90%",
            padding: "10px"
          }}
        />

        <br />
        <br />

        <button
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;