import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
// import Mentor from "./Pages/Mentor/Mentor";
// import Mentee from "./Pages/Mentee/Mentee";
import UserPage from "./Pages/AuthPages/UserPage/UserPage";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/SignForm/Login";
import GoogleSignup from "./Components/SignForm/GoogleSignup";
import ForgetPass from "./Components/ForgetPass/ForgetPass.jsx";
import ResetPassword from "./Components/ResetPass/ResetPass.jsx";
import MentorBlogPage from "./Pages/MentorBlogPage/MentorBlogPage";
import MentorAllBlogs from "./Pages/MentorAllBlogs/MentorAllBlogs";
// import Dashboard from "./React Components/Dashboard/Dashboard";
// import { useParams } from 'react-router-dom';

// const UserWrapper = () => {
//   const { type, token, link } = useParams();
//   return <ResetPassword token={token} link={link} type={type} />
// };

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ minWidth: "350px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentorblog/:id" element={<MentorBlogPage />} />
          <Route path="/mentorallblogs" element={<MentorAllBlogs />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/ResetPassword/:type/:token/:link" element={<ResetPassword />} />
          <Route path="/signup" element={<Login prop="register" />} />
          <Route path="/login" element={<Login prop="login" />} />
          <Route path='/gsingup' element={<GoogleSignup />} />
          <Route path='/auth/user' element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
