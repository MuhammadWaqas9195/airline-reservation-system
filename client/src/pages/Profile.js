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
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}
    >
      <div
        style={{
          width: "700px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "20px",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Welcome, {user?.name} ✈️
        </h1>

        <h2
          style={{
            textAlign: "center",
            color: "#ffd54f"
          }}
        >
          Your Profile Information
        </h2>

        <hr />

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>City:</strong> {user?.city}
        </p>

        <p>
          <strong>State:</strong> {user?.state}
        </p>

        <p>
          <strong>Zip Code:</strong> {user?.zip}
        </p>

        <br />

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <button
            onClick={() =>
              window.location.href =
                "/reservations"
            }
          >
            Book Flight
          </button>

          <button
            onClick={() =>
              window.location.href =
                "/tickets"
            }
          >
            My Tickets
          </button>

          <button
            onClick={() =>
              window.location.href =
                "/flightstatus"
            }
          >
            Flight Status
          </button>
        </div>

        <br />

        <h2
          style={{
            textAlign: "center",
            color: "#ffd54f"
          }}
        >
          Account Management
        </h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <button
            onClick={handleLogout}
          >
            Logout
          </button>

          <button
  onClick={() => {

    localStorage.removeItem(
      "user"
    );

    alert(
      "Account Deleted Successfully"
    );

    window.location.href =
      "/signup";

  }}
>
  Delete Account
</button>

          <button
  onClick={() => {

    alert(
      "Edit Account Feature Coming Soon"
    );

  }}
>
  Edit Account
</button>

          <button
            onClick={() =>
              window.location.href =
                "/feedback"
            }
          >
            Feedback
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;