import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Sidebar = () => {
  const { selectedRole, setRole } = useAuth();

  const getSidebarContent = () => {
    switch (selectedRole) {
      case "teacher":
        return (
          <>
            <li>
              <NavLink to="/attendance-management">
                Attendance Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/grades">Grades Management</NavLink>
            </li>
            <li>
              <NavLink to="/post-assignment">Post Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/time-table">Time Table</NavLink>
            </li>
          </>
        );
      case "student":
        return (
          <>
            <li>
              <NavLink to="/view-attendance">View Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/record-attendance">Record Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/view-grades">Grades</NavLink>
            </li>
            <li>
              <NavLink to="/make-assignment">Assignment</NavLink>
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
              <NavLink to="/record-Record">Record Feedbacks</NavLink>
            </li>
            <li>
              <NavLink to="/make-timetable">Make TimeTable</NavLink>
            </li>
            <li>
              <NavLink to="/add-student">Add New Student</NavLink>
            </li>
            <li>
              <NavLink to="/add-teacher">Add New Teacher</NavLink>
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
              to="/dashboard"
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
