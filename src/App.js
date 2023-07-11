import React from "react";
import Login from "./components/Login/Login";
import "./App.css";
// import Header from './components/header/Header';
// import Main from './components/main-section/Main';
import Courses from './components/course-modules/Courses';
import Module1 from "./components/module-1/Module1";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Lesson from "./components/lessonExample/Lesson";
import Task from "./components/task-homework/Task";
import Profile from "./components/profile/Profile";
import Module2 from "./components/module-2/Module2";
import Module3 from "./components/module-3/Module3";
import Module4 from "./components/module-4/Module4";
import Module5 from "./components/module-5/Module5";
import Module6 from "./components/module-6/Module6";
import Module7 from "./components/module-7/Module7";
import Module8 from "./components/module-8/Module8";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module4" element={<Module4 />} />
        <Route path="/module5" element={<Module5 />} />
        <Route path="/module6" element={<Module6 />} />
        <Route path="/module7" element={<Module7 />} />
        <Route path="/module8" element={<Module8 />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/homework" element={<Task />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
    
  );
}

export default App;
