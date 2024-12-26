import React, { useState } from "react";
import { useHabits } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
    const { updateHabit, deleteHabit } = useHabits();
    const [newName, setNewName] = useState(habit.name);
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = () => {
        if (newName.trim()) {
            updateHabit(habit.id, newName);
            setIsEditing(false);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
            }}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    style={{ flex: "1", marginRight: "10px", padding: "5px" }}
                />
            ) : (
                <span style={{ flex: "1" }}>{habit.name}</span>
            )}
            <div>
                {isEditing ? (
                    <button onClick={handleUpdate} style={{ marginRight: "5px" }}>
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        style={{ marginRight: "5px" }}
                    >
                        Edit
                    </button>
                )}
                <button onClick={() => deleteHabit(habit.id)}>Delete</button>
            </div>
        </div>
    );
};

export default HabitItem;
