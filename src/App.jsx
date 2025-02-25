import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar"
import { CourseList, AddCourse, TeacherPage, StudentPage, ErrorPage} from './pages';
// import ViewCourse from "./pages/viewcourse"
// import EditCourse from "./pages/editcourse"


function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/teacherpage" element={<TeacherPage />} />
        <Route path="/studentpage" element={<StudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
