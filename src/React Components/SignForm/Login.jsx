
import React from 'react';
import "./Login.css";
import "./Register.css";
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASU8t9V4Hs8sCN23KfF68fW2hY2GMBtGg",
    authDomain: "dotconnect-73256.firebaseapp.com",
    projectId: "dotconnect-73256",
    storageBucket: "dotconnect-73256.appspot.com",
    messagingSenderId: "646124587166",
    appId: "1:646124587166:web:564999fbd49b978f01938f",
    measurementId: "G-C2ZJPY1FR6",
};

initializeApp(firebaseConfig);

export default function UserInteraction({prop} ) {
    const [formtype, setFormtype] = useState(prop)
    // console.log(prop,formtype)
    const [person, setPerson] = useState('Mentor')
    const auth = getAuth();
    const [user, setUser] = useState(null);

    const loginManually = async (e) => {
        console.log(e);
    };


    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            console.log("Google Signup/Login successful:", userCredential.user);
        } catch (error) {
            console.log("Google login failed:", error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            console.log("Sign out successful");
        } catch (error) {
            console.log("Sign out failed:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleRoleChange = (event) => {
        console.log(event.target.value);
        setPerson(event.target.value); // Update the selected role when the dropdown value changes
    };

    const handleFormChange = (event) =>{
        console.log(event.target.children[0].name);
        const name = event.target.children[0].name;
        const strings = name.split("-")
        setFormtype(strings[1]);
        setPerson(strings[0]);
    }

    return (
        <div className="user-interaction-page">
            {formtype==='login' && (            <div className="login-box">
                <div className="select-person">
                    <label for="membership">Select Type:</label>
                    <select name="persontype" id="persontype" onChange={handleRoleChange} defaultValue={person}>
                        <option value="Mentor">Mentor</option>
                        <option value="Mentee">Mentee</option>
                    </select>
                </div>
                {person === "Mentor" && (
                    <>
                        <h2>Mentor Login Form</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="email" required="" />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" required="" />
                                <label>Password</label>
                            </div>
                            <input name='mentor' type="hidden" />
                            <div className="btns-container">
                                <a onClick={(e)=>{loginManually(e)}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Login
                                </a>
                                <a className='google-sign-in' onClick={loginWithGoogle}>
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
                            <span onClick={handleFormChange}>
                            <input name="Mentor-register" type="hidden" />
                                  Sign Up Here</span>
                        </div>
                    </>
                )}
                {person === "Mentee" && (
                    <>
                        <h2>Mentee Login Form</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="email" required="" />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" required="" />
                                <label>Password</label>
                            </div>
                            <input name='mentee' type="hidden" />
                            <div className="btns-container">
                                <a onClick={(e)=>{loginManually(e)}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Login
                                </a>
                                <a className='google-sign-in' onClick={loginWithGoogle}>
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
                            <span onClick={handleFormChange}>
                            <input name="Mentee-register" type="hidden" />
                                 Sign Up Here</span>
                        </div>
                    </>
                )}
            </div>)}
            {formtype==='register' && (            
            <div className="register-box">
                <div className="select-person">
                    <label for="membership">Select Type:</label>
                    <select name="persontype" id="persontype" onChange={handleRoleChange} defaultValue={person}>
                        <option value="Mentor">Mentor</option>
                        <option value="Mentee">Mentee</option>
                    </select>
                </div>
                {person === "Mentor" && (
                    <>
                        <h2>Mentor Signup Form</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="email" required="" />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" required="" />
                                <label>Password</label>
                            </div>
                            <input name='mentor' type="hidden" />
                            <div className="btns-container">
                                <a onClick={(e)=>{loginManually(e)}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Signup
                                </a>
                                <a className='google-sign-up' onClick={loginWithGoogle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Signup with Google
                                </a>
                            </div>
                        </form>
                        <div className="sign-up-text">
                            Already Have Account?
                            <span onClick={handleFormChange}>
                            <input name="Mentor-login" type="hidden" />
                                  Login Here</span>
                        </div>
                    </>
                )}
                {person === "Mentee" && (
                    <>
                        <h2>Mentee Signup Form</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="email" required="" />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="name" required="" />
                                <label>Name</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="number" required="" />
                                <label>Phone Number</label>
                            </div>
                            <div className="user-box">
                                <input type="date" name="dob" required="" id='date-input'/>
                                <label>Date of Birth</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="gender" required="" />
                                <label>Gender</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="location" required="" />
                                <label>Current Location</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" required="" />
                                <label>Password</label>
                            </div>
                            <input name='mentee' type="hidden" />
                            <div className="btns-container">
                                <a onClick={(e)=>{loginManually(e)}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Signup
                                </a>
                                <a className='google-sign-up' onClick={loginWithGoogle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Signup with Google
                                </a>
                            </div>
                        </form>
                        <div className="sign-up-text">
                            Already Have Account?
                            <span onClick={handleFormChange}>
                            <input name="Mentee-login" type="hidden" />
                                 Login Here</span>
                        </div>
                    </>
                )}
            </div>)}
        </div>
    );
}