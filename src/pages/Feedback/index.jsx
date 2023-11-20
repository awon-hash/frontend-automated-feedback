import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";

const Feedback = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-3">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="Teacher" class="form-label">
                  Teacher Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="teacherName"
                  placeholder="Name"
                />
              </div>
              <div class="col-md-6">
                <label for="Subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="col-12">
                <label for="question1" class="form-label">
                  Did the teacher upload assignment on time?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question1"
                  placeholder="Yes/No"
                />
              </div>
              <div class="col-12">
                <label for="question2" class="form-label">
                  Did the teacher upload course material on time?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question2"
                  placeholder="Yes/No"
                />
              </div>
              <div class="col-12">
                <label for="question3" class="form-label">
                  Did the teacher upload grades on time?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question3"
                  placeholder="Yes/No"
                />
              </div>
              <div class="col-12">
                <label for="question4" class="form-label">
                  Teacher's beahvior was good?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question4"
                  placeholder="Yes/No"
                />
              </div>
              <div class="col-12">
                <label for="question5" class="form-label">
                  Teacher's teaching style was easily understandable?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question5"
                  placeholder="Yes/No"
                />
              </div>
              <div class="comment mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Explain all your answer in detail
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Leave a comment"
                ></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
