import React, { useState } from 'react';

const DeleteCourse = () => {
    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSearch = () => {
        // Replace with your actual search logic
        const course = { id: '123', name: 'Sample Course' }; // Example course
        if (courseId === course.id || courseName === course.name) {
            setSelectedCourse(course);
        } else {
            alert('Course not found');
        }
    };

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const confirmDelete = (confirm) => {
        if (confirm) {
            // Replace with your actual delete logic
            alert('Course successfully deleted');
            setSelectedCourse(null);
        }
        setShowConfirm(false);
    };

    return (
        <div>
            <h1>Delete Course</h1>
            <div>
                <label>
                    Course ID:
                    <input
                        type="text"
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Course Name:
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleSearch}>Search Course</button>

            {selectedCourse && (
                <div>
                    <h2>Course Details</h2>
                    <p>ID: {selectedCourse.id}</p>
                    <p>Name: {selectedCourse.name}</p>
                    <button onClick={handleDelete}>Delete Course</button>
                </div>
            )}

            {showConfirm && (
                <div>
                    <p>Are you sure you want to delete this course?</p>
                    <button onClick={() => confirmDelete(true)}>Yes</button>
                    <button onClick={() => confirmDelete(false)}>No</button>
                </div>
            )}
        </div>
    );
};

export default DeleteCourse;