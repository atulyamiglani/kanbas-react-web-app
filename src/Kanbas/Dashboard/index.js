import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container" style={{ marginLeft: "10%", paddingTop: "5%" }}>
      <h2>Dashboard</h2>
      <hr />
      <h4>Published Courses (7)</h4>
      <hr />
      <div className="row">
        {courses.map((course) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="./home.html" style={{ color: "blue" }}>
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className=""
              >
                <div
                  className="card wd-margin-all-around"
                  style={{ width: "250px" }}
                >
                  <div className="colored-square"></div>
                  <div className="card-body">
                    <h6 className="card-title">{course.name}</h6>
                    <p className="card-text">
                      {course.number} | {course.startDate}
                    </p>
                  </div>
                </div>
              </Link>
            </a>
          </div>
        ))}

        {/* {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className=""
          >
            {course.name}
          </Link>
        ))} */}
      </div>
    </div>
  );
}
export default Dashboard;
