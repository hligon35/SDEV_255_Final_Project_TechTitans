import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCourse = () => {
    const [course, setCourse] = useState({
        name: '',
        id: '',
        credits: '',
        description: ''
    });
    const [isTeacher, setIsTeacher] = useState(false);
    const { courseId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is a teacher
        const checkUserRole = async () => {
            try {
                const response = await fetch('htpp://localhost:3000/api/checkUserRole');
                if (!response.ok) throw new Error('Failed to check user role');

                const data = await response.json();
                if (data.role === 'teacher') {
                    setIsTeacher(true);
                    
                } else {
                    navigate('/unauthorized');
                }
            } catch (error) {
                console.error('Error checking user role:', error);
            }
        };

        checkUserRole();
    }, [navigate]);

    useEffect(() => {
        // Fetch course data
        const fetchCourse = async () => {
            try {
                const response = await fetch(`/api/courses/${courseId}`);
                if (!response.ok) throw new Error('Failed to fetch course data');

                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourse();
    }, [courseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/courses/${course.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            });

            if (!response.ok) throw new Error('Failed to update course');

            navigate('/courses');
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    if (!isTeacher) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Course Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={course.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Course ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={course.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Credits:</label>
                    <input
                        type="number"
                        name="credits"
                        value={course.credits}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Course</button>
            </form>
        </div>
    );
};

export default EditCourse;
