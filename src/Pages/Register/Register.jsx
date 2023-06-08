import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [role, setRole] = useState('mentor'); // Default role is "mentor"

  const handleRoleChange = (event) => {
    setRole(event.target.value); // Update the selected role when the dropdown value changes
  };

  return (
    <div className="register-container">
    <h2 className="registration-heading">Registration</h2>
    <label htmlFor="role">Choose a role:</label>
    <select id="role" value={role} onChange={handleRoleChange}>
      <option value="mentor">Mentor</option>
      <option value="mentee">Mentee</option>
    </select>

    {role === 'mentor' && (
      <div className="form-container">
        {/* Form for mentor */}
        <h3>Mentor Form</h3>
        {/* Your mentor form inputs go here */}
      </div>
    )}

    {role === 'mentee' && (
      <div className="form-container">
        {/* Form for mentee */}
        <h3>Mentee Form</h3>
        {/* Your mentee form inputs go here */}
      </div>
    )}
  </div>
  );
}

export default Register;
