import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { selectedRole, setRole } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", selectedRole);

    if (email === "example@example.com" && password === "password") {
      // Navigate to the /dashboard route on successful login
      setRole(selectedRole.toLowerCase());
      navigate("/dashboard");
    } else {
      // Handle unsuccessful login (show error message, etc.)
      setLoginError(true);
      console.log("Login failed");
    }
  };

  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <a href="#">
                        <img src="images/logo.jpg" alt="" />
                      </a>
                    </div>
                    <h4 className="text-center mb-4">Sign in your account</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="hello@example.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Role</strong>
                        </label>
                        <select
                          className="form-control"
                          value={selectedRole}
                          onChange={(event) => setRole(event.target.value)}
                        >
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="form-check custom-checkbox ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Remember my preference
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <a href="/forgetpassword">Forgot Password?</a>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign Me In
                        </button>
                      </div>
                      {loginError && (
                        <div className="alert alert-danger mt-3" role="alert">
                          Invalid email or password. Please try again.
                        </div>
                      )}
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Don't have an account? Contact your Adminstrator for
                        Credential
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
