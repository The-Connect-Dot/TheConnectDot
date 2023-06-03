import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};
