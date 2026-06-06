import { useState } from "react";

function Feedback() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {

    const allFeedback =
      JSON.parse(
        localStorage.getItem("feedbacks")
      ) || [];

    allFeedback.push({
      name,
      email,
      feedback
    });

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(allFeedback)
    );

    alert("Feedback Submitted!");

    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        backgroundSize: "cover",
        paddingTop: "50px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white"
        }}
      >
        User Search & Feedback
      </h1>

      <div
        style={{
          width: "500px",
          margin: "auto",
          background: "rgba(0,0,0,0.7)",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            marginBottom: "10px"
          }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            marginBottom: "10px"
          }}
        />

        <textarea
          placeholder="Type Feedback..."
          rows="6"
          value={feedback}
          onChange={(e) =>
            setFeedback(e.target.value)
          }
          style={{
            width: "100%"
          }}
        />

        <br />
        <br />

        <button
          onClick={submitFeedback}
        >
          Send Feedback
        </button>
      </div>
    </div>
  );
}

export default Feedback;