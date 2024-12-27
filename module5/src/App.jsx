import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./custom-components/Header";
import Footer from "./custom-components/Footer";
import AddHabitForm from "./custom-components/AddHabitForm";
import HabitList from "./custom-components/HabitList";
import About from "./custom-components/About";

function App() {
  const healthTips = [
    "Drink plenty of water",
    "Eat a balanced diet",
    "Start Boxing",
    "Start Football",
  ];

  const [dailyTip, setDailyTip] = useState("");
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomOrder = Math.floor(Math.random() * healthTips.length);
      setDailyTip(healthTips[randomOrder]);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const updateHabit = (id, updatedName) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, name: updatedName } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Navigation styles
  const navStyle = {
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px 0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    margin: "0 15px",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#0056b3",
  };

  return (
    <Router>
      <div
        className="parent-container"
        style={{ display: "flex", minHeight: "100vh", flexDirection: "column", minWidth: '100vw' }}
      >
        <Header />
        <nav style={navStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
          |
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            About
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p style={{ textAlign: "center" }}>"{dailyTip}"</p>
                <AddHabitForm onAdd={addHabit} />
                <HabitList
                  habits={habits}
                  onDelete={deleteHabit}
                  onUpdate={updateHabit}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
