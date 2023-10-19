import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div>
        <ul class="list-group">
          <div class="container p-2">
            <input
              style={{ height: "37px" }}
              placeholder="Search for Assignment"
            />
            <div class="float-end wd-fg-color-green">
              <i
                class="fa fa-check-circle wd-fg-color-green p-1"
                aria-hidden="true"
              ></i>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="wd-fg-color-green p-1"
              />
              Published
              <button type="button" class="btn btn-secondary col">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </div>
          </div>
          <hr />
          <form>
            <div class="mb-3">
              <label for="Assignment Name" class="form-label">
                Assignment Name
              </label>
              <input value={assignment.title} className="form-control mb-2" />
            </div>
          </form>
        </ul>
      </div>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        <div style={{ color: "white" }}>Cancel</div>
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
