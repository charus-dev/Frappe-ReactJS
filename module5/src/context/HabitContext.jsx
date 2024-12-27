import React, { createContext, useContext, useState } from "react";
// For Deployement
const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    const addHabit = (habit) => {
        setHabits((prevHabits) => [...prevHabits, habit]);
    };

    const updateHabit = (id, updatedName) => {
        setHabits((prevHabits) =>
            prevHabits.map((habit) =>
                habit.id === id ? { ...habit, name: updatedName } : habit
            )
        );
    };

    const deleteHabit = (id) => {
        setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };

    return (
        <HabitContext.Provider
            value={{ habits, addHabit, updateHabit, deleteHabit }}
        >
            {children}
        </HabitContext.Provider>
    );
};

export const useHabits = () => {
    return useContext(HabitContext);
};
