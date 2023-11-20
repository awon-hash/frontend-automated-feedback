import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
            <ul aria-expanded="false">
              <li>
                <NavLink to="/">Dashboard</NavLink>
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
                <NavLink to="/grades"> Grades Management</NavLink>
              </li>
              <li>
                <NavLink to="/make-assignment">Make Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/time-table">Time Table</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
