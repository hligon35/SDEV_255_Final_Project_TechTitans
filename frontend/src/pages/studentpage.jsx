import React, { useState } from 'react';
import './styles.css';

function StudentPage() {
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseDescription, setCourseDescription] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleAddCourse = (courseName) => {
    if (courseName && !courseList.includes(courseName)) {
      setCourseList([...courseList, courseName]);
      setValidationMessage('Course added successfully!');
    } else {
      setValidationMessage('Course already exists or invalid course name.');
    }
  };

  const handleRemoveCourse = (courseName) => {
    if (courseList.includes(courseName)) {
      setCourseList(courseList.filter(course => course !== courseName));
      setValidationMessage('Course removed successfully!');
    } else {
      setValidationMessage('Course not found.');
    }
  };

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
    setCourseDescription(`Description for ${courseName}`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const courseName = event.target.elements['course-name'].value.trim();
    handleAddCourse(courseName);
    event.target.reset();
  };

  return (
    <div>
      <header>
        <h1>Student Schedule</h1>
      </header>
      <main>
        <section id="view-schedule">
          <h2>Your Schedule</h2>
          <ul id="course-list">
            {courseList.map(course => (
              <li key={course} onClick={() => handleCourseClick(course)}>
                {course}
              </li>
            ))}
          </ul>
        </section>
        <section id="course-details">
          <h2>Course Details</h2>
          <div id="course-description">{courseDescription}</div>
          <button onClick={() => handleAddCourse(selectedCourse)}>Add Course</button>
          <button onClick={() => handleRemoveCourse(selectedCourse)}>Remove Course</button>
        </section>
        <section id="manage-schedule">
          <h2>Manage Your Schedule</h2>
          <form id="add-course-form" onSubmit={handleFormSubmit}>
            <label htmlFor="course-name">Course Name:</label>
            <input type="text" id="course-name" name="course-name" required />
            <button type="submit">Add Course</button>
          </form>
        </section>
        <section id="current-schedule">
          <h2>Current Schedule</h2>
          <textarea id="schedule-textarea" value={courseList.join('\n')} readOnly />
        </section>
        <div id="validation-message">{validationMessage}</div>
      </main>
    </div>
  );
}

export default StudentPage;