import React from "react";
import NavHeader from "../../components/NavHeader";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Profile = () => {
  return (
    <>
      <NavHeader />
      <Header />
      <Sidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile card card-body px-3 pt-3 pb-0">
                <div className="profile-head">
                  <div className="photo-content">
                    <div className="cover-photo rounded"></div>
                  </div>
                  <div className="profile-info">
                    <div className="profile-photo">
                      <img
                        src="images/profile/images(1).png"
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="profile-details">
                      <div className="profile-name px-3 pt-2">
                        <h4 className="text-primary mb-0">Professor Sana</h4>
                        <p>Senior Lecturer</p>
                      </div>
                      <div className="profile-email px-2 pt-2">
                        <h4 className="text-muted mb-0">info@example.com</h4>
                        <p>Email</p>
                      </div>
                      <div className="dropdown ms-auto">
                        <a
                          href="#"
                          className="btn btn-primary light sharp"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <circle
                                fill="#000000"
                                cx="5"
                                cy="12"
                                r="2"
                              ></circle>
                              <circle
                                fill="#000000"
                                cx="12"
                                cy="12"
                                r="2"
                              ></circle>
                              <circle
                                fill="#000000"
                                cx="19"
                                cy="12"
                                r="2"
                              ></circle>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="modal fade" id="replyModal">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Post Reply</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <textarea className="form-control" rows="4">
                        Message
                      </textarea>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger light"
                      data-bs-dismiss="modal"
                    >
                      btn-close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
