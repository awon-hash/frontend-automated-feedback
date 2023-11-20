import React from "react";
import Navbar from "../../components/Navbar";

const RecordAttendance = () => {
  return (
    <>
      <Navbar />
      <div className="page container">
        <div className="row">
          <div className="col-sm-6 offset-4">
           <h2>QR Code</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordAttendance;
