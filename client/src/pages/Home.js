import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "50px"
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px"
          }}
        >
          ✈️ Fly Around The World
        </h1>

        <h2>
          Your Journey Starts Here
        </h2>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px"
          }}
        >
          Book flights easily and travel comfortably
          to destinations around the globe.
        </p>

        <Link to="/flights">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            Book Your Flight
          </button>
        </Link>
      </div>

      <div
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#f4f4f4"
        }}
      >
        <h2 style={{ color: "#003366" }}>
          Why Choose Passage Airline?
        </h2>

        <p>✓ Easy Flight Booking</p>
        <p>✓ Secure Online Reservations</p>
        <p>✓ Affordable Flight Prices</p>
        <p>✓ 24/7 Customer Support</p>
      </div>

      <div
        style={{
          backgroundColor: "#003366",
          color: "white",
          padding: "30px",
          textAlign: "center"
        }}
      >
        <h3>Passage Airline</h3>

        <p>
          About Us | Flights | Reservations | Contact
        </p>

        <p>
          Email: support@passageairline.com
        </p>

        <p>
          Phone: (800) 555-1234
        </p>

        <p>
          © 2026 Passage Airline. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Home;