import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar"
import Courses from "./components/course"
import { CourseList, AddCourse, TeacherPage, StudentPage, ErrorPage} from './pages';
// import ViewCourse from "./pages/viewcourse"
// import EditCourse from "./pages/editcourse"

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/courselist';
import AddCourse from './pages/addcourse';
import EditCourse from './pages/editcoursepage';
// import MySchedule from './pages/MySchedule';
import Unauthorized from './pages/unauthorized';
import TeacherRoute from './components/TeacherRoute';
import Navbar from './components/navbar';

function App() {
    return (
        <BrowserRouter basename="/SDEV_255_Final_Project_TechTitans">
          <Navbar />
            <Routes>
                {/* landing page is course list */}
                <Route path="/" element={<CourseList />} />
                <Route path="/courselist" element={<CourseList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/unauthorized" element={<Unauthorized />} />

                {/* Teacher-only routes */}
                <Route element={<TeacherRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/editcourse/:courseId" element={<EditCourse />} />
                </Route>

                {/* Student-only routes */}
                {/* <Route path="/myschedule" element={<MySchedule />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

