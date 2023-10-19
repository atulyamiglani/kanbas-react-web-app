import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEllipsis,
  faEllipsisV,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      <div className="container p-2">
        <div className="float-end">
          <button type="button" className="btn btn-secondary col">
            Collapse All
          </button>
          <button type="button" className="btn btn-secondary col">
            View Progress
          </button>
          <button type="button" className="btn btn-secondary col">
            Publish All
          </button>
          <span className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faPlus} />
              Module
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
          <button type="button" className="btn btn-secondary col">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            className="list-group-item list-group-item-secondary"
            style={{ marginTop: "20px", marginRight: "20px" }}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
            <FontAwesomeIcon icon={faEllipsisV} />
            <span className="p-2">
              {module.name}
              <div className="float-end">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="wd-fg-color-green"
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ paddingLeft: "10px" }}
                />
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{ color: "gray", paddingLeft: "10px" }}
                />
              </div>
            </span>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
