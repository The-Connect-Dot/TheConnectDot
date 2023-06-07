// import React, { useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyASU8t9V4Hs8sCN23KfF68fW2hY2GMBtGg",
//   authDomain: "dotconnect-73256.firebaseapp.com",
//   projectId: "dotconnect-73256",
//   storageBucket: "dotconnect-73256.appspot.com",
//   messagingSenderId: "646124587166",
//   appId: "1:646124587166:web:564999fbd49b978f01938f",
//   measurementId: "G-C2ZJPY1FR6",
// };
// initializeApp(firebaseConfig);
// const auth = getAuth();
// console.log(auth);
// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       // Handle successful signup
//       console.log("Signup successful:", userCredential.user);
//     } catch (error) {
//       // Handle signup error
//       console.log("Signup failed:", error.message);
//       setError(error.message);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const userCredential = await signInWithPopup(auth, provider);
//       // Handle successful Google signup/login
//       console.log("Google Signup/Login successful:", userCredential.user);
//     } catch (error) {
//       // Handle Google signup/login error
//       console.log("Google Signup/Login failed:", error.message);
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       {error && <p>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup}>Signup</button>
//       <button onClick={handleGoogleSignup}>Signup/Login with Google</button>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
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

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);
function Signup() {
  const [user, setUser] = useState(null);

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

  return (
    <div>
      <h2>React Firebase Google Login</h2>
      <br />
      <br />
      {user ? (
        <div>
          <img src={user.photoURL} alt="user" />
          <h3>User Logged in</h3>
          <p>Name: {user.displayName}</p>
          <p>Email Address: {user.email}</p>
          <br />
          <br />
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Signup;
