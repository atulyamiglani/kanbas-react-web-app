import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import "../../index-kanbas.css";
import {
  faBook,
  faCalendar,
  faFileExport,
  faHistory,
  faInbox,
  faMugHot,
  faTachometerAlt,
  faTachometerAltAverage,
  faTv,
  faUserLarge,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { questionCircle } from "fontawesome";
function KanbasNavigation() {
  const nameIcons = {
    Account: faUserLarge,
    Dashboard: faTachometerAltAverage,
    Courses: faBook,
    Calendar: faCalendar,
    Inbox: faInbox,
    History: faHistory,
    Studio: faTv,
    Commons: faFileExport,
    Help: faQuestionCircle,
  };

  const [selected, setSelected] = useState("Account");
  const { pathname } = useLocation();
  return (
    <div className="wd-sidebar-container">
      {Object.keys(nameIcons).map((name, index) => (
        <Link
          key={index}
          to={`/Kanbas/${name}`}
          className={`list-group-item ${pathname.includes(name) && "active"}`}
        >
          <NavigationItem
            name={name}
            icon={nameIcons[name]}
            selected={selected}
            onClickFunction={() => {
              setSelected(name);
            }}
          />
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
