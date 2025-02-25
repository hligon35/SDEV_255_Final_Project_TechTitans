import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://sdev255fpbackend.glitch.me/api/courses")
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

export default Courses;
