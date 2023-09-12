import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const StudentRegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photo, setPhoto] = useState("");
    const [note, setNote] = useState("");
  
    const onSubmit = (event) => {
      event.preventDefault();
      // removed some runtime errors but it's not working on the other file
      axios.post("http://localhost:3000/", {
        firstName,
        lastName,
        photo,
        note,
      }).then((response) => {
        setFirstName("");
        setLastName("");
        setPhoto("");
        setNote("");
      });
    };
  
    return (
      <div>
        <h1>Student Registration</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo"
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
          />
          <input
            type="text"
            name="note"
            placeholder="Note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default StudentRegistrationPage;  