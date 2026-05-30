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
    <div className="hero">

      <h1>User Profile</h1>

      <h2>
        Welcome, {user?.name}
      </h2>

      <p>
        Email: {user?.email}
      </p>

      <p>
        City: {user?.city}
      </p>

      <p>
        State: {user?.state}
      </p>

      <p>
        Zip: {user?.zip}
      </p>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Profile;