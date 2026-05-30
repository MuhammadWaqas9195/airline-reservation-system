import { useEffect, useState } from "react";

function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      });

  }, []);

  return (
    <div className="hero">

      <h1>Welcome to Passage Airline</h1>

      <p>
        Book flights easily and travel comfortably around the world
      </p>

      <h3>{message}</h3>

      <button>Book Now</button>

    </div>
  );
}

export default Home;