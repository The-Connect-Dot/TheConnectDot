import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./React Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact/Contact";
import Footer from "./React Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
