import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddHabitForm = ({onAdd}) => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name){
            onAdd({id: Date.now(), name, streak: 0});
            setName('');
        };
        
    }
    return (
    <form onSubmit = {handleSubmit} style ={{ textAlign: 'center', marginTop: '10px', marginBottom: '5px'}}>
    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder='Enter a new habit of your own' style={{padding: '10px', width: '70%', marginRight: '10px'}}/>
    <button type="submit" style = {{padding: '15px'}}> Add Your Healthy Habits</button>
    </form>
    )

}

AddHabitForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddHabitForm;