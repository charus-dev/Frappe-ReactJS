import React, { useState} from 'react';
import PropTypes from 'prop-types';

const HabitItem = ({habit, onDelete, onUpdate }) =>{
   const [newName, setNewName] = useState(habit.name);
   const [isEditing, setIsEditing] = useState(false);

   const handleUpdate = () => {
    onUpdate (habit.id, newName);
    setIsEditing(false);
   }
    return (
     <>
        <div>
            {
            isEditing ? (
            <input type = "text" value = {newName} onChange = {(e) => setNewName (e.target.value)}/>
            ) : (
                <span> {habit.name} </span> )
            }
        </div>
        <div>
            {
            isEditing ? (
            <button onClick = {handleUpdate} style = {{}}> Save</button>
            ) : (
                <button onClick = {() => setIsEditing(true)} style = {{}}> Edit</button> )
            }

            <button onClick={ () => onDelete(habit.id)}> Delete</button>
        </div>
    </>
    )
   
}

HabitItem.propTypes = {
   habit: PropTypes.object.isRequired,
   onDelete: PropTypes.func.isRequired,
   onUpdate: PropTypes.func.isRequired,
}

export default HabitItem;