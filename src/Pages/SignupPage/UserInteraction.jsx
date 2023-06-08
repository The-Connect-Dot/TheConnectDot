import React from 'react';
import { useState,useEffect } from 'react';
export default function UserInteraction({type}) {
    const [formtype,setFormtype] = useState(type)
    const [person,setPerson] = useState('Mentor')
    const handleRoleChange = (event) => {
        setPerson(event.target.value); // Update the selected role when the dropdown value changes
      };

    
    
  return (
    <div className="user-interaction-page">
        <div className="select-person">
            <label for="membership">Select Type:</label>
            <select name="persontype" id="persontype" onChange={handleRoleChange}>
            <option value="Mentor" selected>Mentor</option>
            <option value="Mentee">Mentee</option>
            </select>
        </div>
        {person==="Mentor" && (
    <div class="login-box">
  <h2>Mentee Login Form</h2>
  <form>
    <div class="user-box">
      <input type="text" name="email" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required=""/>
      <label>Password</label>
    </div>
    <input name='mentee' type="hidden"/>
    <div className="btns-container">
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
    <a href="#" className='google-sign-in'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login with Google
    </a>
    </div>
  </form>
  <div className="sign-up-text">
    Don't Have Account? 
    <span> Sign Up Here</span>
  </div>
</div>
  )}
  {person==="Mentee" && (
    <div class="login-box">
  <h2>Mentee Login Form</h2>
  <form>
    <div class="user-box">
      <input type="text" name="email" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required=""/>
      <label>Password</label>
    </div>
    <input name='mentee' type="hidden"/>
    <div className="btns-container">
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
    <a href="#" className='google-sign-in'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login with Google
    </a>
    </div>
  </form>
  <div className="sign-up-text">
    Don't Have Account? 
    <span> Sign Up Here</span>
  </div>
</div>
  )}
    </div>
    
  );
}