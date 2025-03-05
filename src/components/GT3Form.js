import React, { useState } from "react";
import "./GT3form.css"; // Import the CSS for styling

function GT3Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    console.log(`Test drive request from ${name}`);
    setName(""); // Clear the input field
  };

  return (
    <div className="form-container">
      <h2>Request a Test Drive</h2>
      <p>Experience the precision and performance of the Porsche 911 GT3 Touring.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Request Test Drive
        </button>
      </form>
    </div>
  );
}

export default GT3Form;
