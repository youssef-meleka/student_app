import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const HomePage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/api/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const downloadExcel = () => {
    const data = axios.get("/api/students").data;
    const blob = new Blob([data], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "students.xlsx";
    link.click();
  };
  
  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Photo</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.photo}</td>
              <td>{student.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
};

export default HomePage;