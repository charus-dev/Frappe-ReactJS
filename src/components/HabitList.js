import React from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem';

const HabitList = ({habits, onDelete, onUpdate}) => (
    <div className = "habit-list">
        {habits.length ? (
            habits.map((habit) => (
                <HabitItem
                key = {habit.id}
                habit = {habit}
                onDelete={onDelete}
                onUpdate = {onUpdate}
                />
            ))
        ): (
            <p style = {{textAlign: 'center'}}> No Habits Added, Start tracking</p>
        )}

    </div>
)
HabitList.propTypes = {
   habit: PropTypes.object.isRequired,
   onDelete: PropTypes.func.isRequired,
   OnUpdate: PropTypes.func.isRequired,
}
export default HabitList;