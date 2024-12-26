import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
function App() {

const healthTips = [
  "Drink plenty of water",
  "Eat a balanced diet",
  "Start Boxing",
  "Start Football"
]

const [dailyTip, setDailyTip] = useState ('');
const [habits, setHabits] = useState([]);

useEffect(() =>{
  const intervalId = setInterval(() =>{
    const randomOrder = Math.floor(Math.random() * healthTips.length);

    setDailyTip(healthTips[randomOrder])
  },4000);
  return () => clearInterval(intervalId);
},[]);

const addHabit = (habit) => {
  setHabits([...habits, habit]);
}
const updateHabit = (id, updatedName) => {
  setHabits(
    habits.map((habit)=> (habit.id === id ? {...habit, name: updatedName}: habit))
  )
}
const deleteHabit = (id) => {
  setHabits([habits.filter((habit)=> habit.id !== id)]);
}

 return (
   <div className='parent-container' style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
       <Header />
       <p style={{textAlign:"center"}}>
         "{dailyTip}"
       </p>
       < AddHabitForm onAdd={addHabit}/>
       <HabitList habits = {habits} onDelete = {deleteHabit} onUpdate = {updateHabit}/>
     
       <Footer />
       </div>
 );
}


export default App;