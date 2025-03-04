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

export default CourseList;