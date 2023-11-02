import KanbasNavigation from "./KanbasNavigation.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses/index.js";
import Home from "./Courses/Home/index.js";
import Assignments from "./Courses/Assignments/index.js";
import React from "react";
import db from "./Database";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
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
