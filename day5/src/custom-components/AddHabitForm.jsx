import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHabits } from "../context/HabitContext";
import {Button} from "../components/ui/button"

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { addHabit } = useHabits(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if the input is empty or numeric
    if (!name.trim()) {
      setError("Habit cannot be empty.");
      return;
    }

    if (!isNaN(name)) {
      setError("Habit cannot be a number.");
      return;
    }

    // If valid, add habit and reset input
    addHabit({ id: Date.now(), name, streak: 0 });
    setName("");
    setError(""); // Clear error after successful submission
  };

  // Inline styles for the form and its elements
  const formStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    color: "white"
  };

  const inputStyle = {
    padding: "10px",
    width: "80%",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a new habit"
        style={inputStyle}
      />

      <Button type="submit">
      Add Your Healthy Habit
      </Button>

      {/* Display error message if validation fails */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </form>
  );
};

AddHabitForm.propTypes = {
  onAdd: PropTypes.func.isRequired, 
};

export default AddHabitForm;
