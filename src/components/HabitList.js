import React from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem';
import { useHabits } from "../context/HabitContext";

const HabitList = () => {
    const { habits } = useHabits();

    return (
        <div className="habit-list" style={{ margin: "20px" }}>
        {habits.length ? (
            habits.map((habit) => <HabitItem key={habit.id} habit={habit} />)
        ) : (
            <p style={{ textAlign: "center" }}>No Habits Added, Start tracking</p>
        )}
    </div>
    );
};

HabitList.propTypes = {
   habit: PropTypes.object.isRequired,
   onDelete: PropTypes.func.isRequired,
   OnUpdate: PropTypes.func.isRequired,
}
export default HabitList;