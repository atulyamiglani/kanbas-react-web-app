import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Quizzes",
    "Grades",
    "Assignments",
    "People",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [selected, setSelected] = useState("Home");
  return (
    <div className="list-group" style={{ width: 250, marginLeft: "8%" }}>
      <nav
        style={{ "--bs-breadcrumb-divider": "", padding: "2%" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item wd-fg-color-red">
            <a href="#">{courseId}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
        <hr />
      </nav>

      <div className="col-3">
        <ul>
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`${pathname.includes(link) && "active"}`}
              onClick={() => {
                setSelected(link);
              }}
            >
              <div
                className={`wd-account-nav-cell${
                  selected == link ? "-active" : ""
                }`}
                style={{ color: selected == link ? "black" : "" }}
              >
                {link}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseNavigation;
