import KanbasNavigation from "./KanbasNavigation.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses/index.js";
import Home from "./Courses/Home/index.js";
import Assignments from "./Courses/Assignments/index.js";
import React from "react";
import db from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/index.js";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    // setCourse({ name: "" });
  };

  return (
    <div>
      <Provider store={store}>
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                course={course}
                courses={courses}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                setCourse={setCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
          <Route path="Assignments" element={<Assignments />} />
        </Routes>
      </Provider>
    </div>
  );
}
export default Kanbas;
