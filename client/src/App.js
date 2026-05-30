import "./App.css";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import MyTickets from "./pages/MyTickets";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Login from "./pages/Login";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>Passage Airline</h2>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/flights">Flights</Link>
          </li>

          <li>
            <Link to="/reservations">Reservations</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/tickets">My Tickets</Link>
          </li>

        </ul>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/flights" element={<Flights />} />

        <Route path="/reservations" element={<Reservations />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route
              path="/tickets" element={<MyTickets />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;