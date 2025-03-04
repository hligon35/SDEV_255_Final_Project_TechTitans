import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './courselist.css';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Fetch the course list from the database
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="course-list-container">
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-item" onClick={() => handleCourseClick(course)}>
            {course.name}
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="course-popup">
          <div className="course-popup-content">
            <h2>{selectedCourse.name}</h2>
            <p>{selectedCourse.description}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL; 
console.log("API URL:", API_URL);


const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
    // fetch("https://sdev255fpbackend.glitch.me/api/courses")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse JSON if response is OK
    })
    .then((data) => {
      // Process the data
      setCourses(data);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
  
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((courses) => (
            <tr key={courses._id}>
              <td>{courses.name}</td>
              <td>{courses.description}</td>
              <td>{courses.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
