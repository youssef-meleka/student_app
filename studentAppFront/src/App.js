import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";
import StudentRegistrationPage from "./components/StudentRegistrationPage";

const App = () => {
  return (
    <div>
      <HomePage />
      <StudentRegistrationPage />
    </div>
  );
};

export default App;
