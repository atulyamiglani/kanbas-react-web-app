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
        <ul class="list-group">
          <div class="container p-2">
            <input
              style={{ height: "37px" }}
              placeholder="Search for Assignment"
            />
            <div class="float-end">
              <button
                class="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-plus" aria-hidden="true"></i>
                Group
              </button>
              <button
                class="btn btn-danger"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-plus" aria-hidden="true"></i>
                Module
              </button>
              <button type="button" class="btn btn-secondary col">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <hr />
          <li
            class="list-group-item list-group-item-secondary"
            style={{ marginRight: "20px" }}
          >
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            <span class="p-2">
              Assignments
              <div class="float-end">
                <span class="border border-dark rounded-pill">
                  40% of Total
                </span>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </span>
          </li>
          {courseAssignments.map((assignment) => (
            <li
              class="list-group-item"
              style={{ "border-left": "5px solid green", color: "black" }}
            >
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              >
                <div class="row">
                  <div class="col-2">
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
                  <div class="col-2">
                    <div class="float-end">
                      <i
                        class="fa fa-check-circle wd-fg-color-green p-1"
                        aria-hidden="true"
                      ></i>
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
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
