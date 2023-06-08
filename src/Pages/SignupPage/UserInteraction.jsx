import React from 'react';
import { useState,useEffect } from 'react';
export default function UserInteraction({type}) {
    const [formtype,setFormtype] = useState(type)
    const [person,setPerson] = useState('Mentor')
  return (
    <div className="user-interaction-page">
        <div className="select-person">
            <label for="membership">Select Type:</label>
            <select name="persontype" id="persontype">
            <option value="mentor" selected>Mentor</option>
            <option value="mentee">Mentee</option>
            </select>
        </div>
    </div>
  );
}
