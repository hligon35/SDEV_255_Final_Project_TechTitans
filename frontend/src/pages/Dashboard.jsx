import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Teacher Dashboard</h2>
            <p>Welcome, Teacher! Here you can manage courses.</p>
            
            <ul>
                <li><Link to="/addcourse">Add a New Course</Link></li>
                <li><Link to="/editcourse">Edit an Existing Course</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;
