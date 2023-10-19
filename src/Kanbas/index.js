import KanbasNavigation from "./KanbasNavigation.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses/index.js";
import Home from "./Courses/Home/index.js";
import Assignments from "./Courses/Assignments/index.js";

function Kanbas() {
  return (
    <div>
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:courseId/*" element={<Courses />} />
        <Route path="Assignments" element={<Assignments />} />
      </Routes>
    </div>
  );
}
export default Kanbas;
