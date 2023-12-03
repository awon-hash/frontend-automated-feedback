import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  const getSidebarContent = () => {
    switch (role) {
      case "teacher":
        return (
          <>
            <li>
              <NavLink to="/dashboard" activeClassName="active" exact>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/attendance-management">
                Attendance Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/record-attendance">Record Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/grades">Grades Management</NavLink>
            </li>
            <li>
              <NavLink to="/make-assignment">Make Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/time-table">Time Table</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </>
        );
      case "student":
        return (
          <>
            <li>
              <NavLink to="/dashboard" activeClassName="active" exact>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/attendance-management">
                Attendance Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/record-attendance">Record Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/grades">Grades Management</NavLink>
            </li>
            <li>
              <NavLink to="/make-assignment">Make Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/time-table">Time Table</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </>
        );

      case "admin":
        return (
          <>
            <li>
              <NavLink to="/dashboard" activeClassName="active" exact>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/attendance-management">
                Attendance Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/record-attendance">Record Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/grades">Grades Management</NavLink>
            </li>
            <li>
              <NavLink to="/make-assignment">Make Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/time-table">Time Table</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <NavLink
              className="has-arrow ai-icon"
              to="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-dashboard-1"></i>
              <span className="nav-text">Dashboard</span>
            </NavLink>
            <ul aria-expanded="false">{getSidebarContent()}</ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
