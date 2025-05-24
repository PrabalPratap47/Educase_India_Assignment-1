import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import AccountSettings from "./components/AccountSettings";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
