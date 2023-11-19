import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEllipsis,
  faEllipsisV,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { createModule } from "./client";
import { findModulesForCourse } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={handleAddModule}>Add</button>
        <button onClick={() => handleUpdateModule()}>Update</button>

        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>

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
            <button onClick={() => dispatch(setModule(module))}> Edit</button>

            <button onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
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
