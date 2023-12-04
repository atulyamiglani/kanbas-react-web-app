import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <ul className="list-group">
          <div className="container p-2">
            <input
              style={{ height: "37px" }}
              placeholder="Search for Assignment"
            />
            <div className="float-end">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
                Group
              </button>
              <button
                className="btn btn-danger"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
                Module
              </button>
              <button type="button" className="btn btn-secondary col">
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <hr />
          <li
            className="list-group-item list-group-item-secondary"
            style={{ marginRight: "20px" }}
          >
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <span className="p-2">
              Assignments
              <div className="float-end">
                <span className="border border-dark rounded-pill">
                  40% of Total
                </span>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </span>
          </li>
          {courseAssignments.map((assignment) => (
            <li
              className="list-group-item"
              style={{ "border-left": "5px solid green", color: "black" }}
            >
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              >
                <div className="row">
                  <div className="col-2">
                    <FontAwesomeIcon icon={faEllipsisV} color="black" />
                    <FontAwesomeIcon icon={faEllipsisV} color="black" />
                    <FontAwesomeIcon
                      icon={faBook}
                      className="wd-fg-color-green"
                    />
                  </div>
                  <div className="col-8 float-start">
                    <a href="./edit.html" style={{ color: "black" }}>
                      <div>{assignment.title}</div>
                    </a>
                    <small>
                      {assignment.course} | Due SEPTEMBER 17, 2023 | Points 100
                    </small>
                  </div>
                  <div className="col-2">
                    <div className="float-end">
                      <i
                        className="fa fa-check-circle wd-fg-color-green p-1"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;
