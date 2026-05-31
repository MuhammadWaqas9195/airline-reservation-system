function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          width: "450px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "#003366"
          }}
        >
          👤 User Profile
        </h1>

        <h2>
          Welcome, {user?.name}
        </h2>

        <hr />

        <p>
          <strong>Email:</strong>
          {" "}
          {user?.email}
        </p>

        <p>
          <strong>City:</strong>
          {" "}
          {user?.city}
        </p>

        <p>
          <strong>State:</strong>
          {" "}
          {user?.state}
        </p>

        <p>
          <strong>Zip:</strong>
          {" "}
          {user?.zip}
        </p>

        <br />

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;