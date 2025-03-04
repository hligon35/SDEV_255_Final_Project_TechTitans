import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [course, setCourse] = useState({ name: '', description: '', credits: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/courses', course);
      setMessage('Course added successfully!');
      setError('');
      setCourse({ name: '', description: '', credits: '' });
    } catch (err) {
      setError('Error adding course. Please try again.');
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={course.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={course.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Credits:</label>
          <input type="number" name="credits" value={course.credits} onChange={handleChange} required />
        </div>
        <button type="submit">Add Course</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AddCourse;
