import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";

const MakeAssignment = () => {
  return (
    <>
      <Navbar />
      <div className="page container">
        <div className="row">
          <div className="col-sm-6 offset-4">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Assignment</th>
                  <th scope="col">Upload Assignment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2"></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAssignment;
