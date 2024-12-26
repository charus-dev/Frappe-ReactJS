import React from "react";

const About = () => {
  // Inline styles
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const descriptionStyle = {
    fontSize: "18px",
    margin: "10px 0",
    color: "#555",
  };

  const visualsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "20px 0",
  };

  const imageStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const videoStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
    color: "#333",
  };

  const listItemStyle = {
    margin: "10px 0",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2>About Healthy Habits Tracker</h2>
      <p style={descriptionStyle}>
        The Healthy Habits Tracker is your personal assistant to track, maintain, 
        and improve your daily habits. Stay consistent with your goals and watch 
        yourself grow every day!
      </p>
      <div style={visualsStyle}>
        <img
          src="/about_img.jpg"
          alt="Healthy Lifestyle"
          style={imageStyle}
        />
        <video
          src="/animations/habits_promo.mp4"
          style={videoStyle}
          controls
        />
      </div>
      <ul style={listStyle}>
        <li style={listItemStyle}>Track your daily habits seamlessly</li>
        <li style={listItemStyle}>Set reminders to stay consistent</li>
        <li style={listItemStyle}>Analyze progress with intuitive charts</li>
      </ul>
    </div>
  );
};

export default About;
