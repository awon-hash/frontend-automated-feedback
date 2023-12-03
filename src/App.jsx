import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import AttendanceManagement from "./pages/AttendanceManagement";
import RecordAttendance from "./pages/RecordAttendance";
import GradeManagement from "./pages/GradeManagement";
import MakeAssignment from "./pages/MakeAssignment";
import TimeTable from "./pages/TimeTable";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/attendance-management" element={<AttendanceManagement />} />
      <Route path="/record-attendance" element={<RecordAttendance />} />
      <Route path="/grades" element={<GradeManagement />} />
      <Route path="/make-assignment" element={<MakeAssignment />} />
      <Route path="/time-table" element={<TimeTable />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
