import { Navigate, Outlet } from 'react-router-dom';

const TeacherRoute = () => {
    const role = localStorage.getItem('role');
    return role === 'teacher' ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default TeacherRoute;
