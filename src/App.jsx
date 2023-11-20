import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import AttendanceManagement from "./pages/AttendanceManagement";
import RecordAttendance from "./pages/RecordAttendance";
import GradeManagement from "./pages/GradeManagement";
import MakeAssignment from "./pages/MakeAssignment";
import TimeTable from "./pages/TimeTable";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attendance-management" element={<AttendanceManagement />} />
      <Route path="/record-attendance" element={<RecordAttendance />} />
      <Route path="/grades" element={<GradeManagement />} />
      <Route path="/make-assignment" element={<MakeAssignment />} />
      <Route path="/time-table" element={<TimeTable />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
