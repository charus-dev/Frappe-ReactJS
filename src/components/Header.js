import React from 'react';

const Header = () => (
  <header 
    style={{
      backgroundColor: '#000', 
      color: '#fff', 
      textAlign: 'center',
      padding: '20px 0', 
      borderRadius: '8px', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
      fontFamily: 'Arial, sans-serif', 
      marginBottom: '30px', 
      position: 'relative', 
    }}
  >
    <h1 
      style={{
        fontSize: '2.5rem', 
        fontWeight: '700', 
        letterSpacing: '2px', 
        display: 'inline-block', 
        marginRight: '15px', 
      }}
    >
      Healthy Habits Tracker
    </h1>
    <i 
      className="fas fa-dumbbell" 
      style={{
        fontSize: '3rem',
        color: '#fff',
        animation: 'bounce 2s infinite', 
      }}
    ></i>
    <p 
      style={{
        fontSize: '1.2rem',
        marginTop: '10px',
        fontWeight: '500',
        opacity: '0.8',
        fontStyle: 'italic',
      }}
    >
      Track your daily habits and stay healthy!
    </p>
  </header>
);

export default Header;
