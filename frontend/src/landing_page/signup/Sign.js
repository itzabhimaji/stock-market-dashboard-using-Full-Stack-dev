import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sign() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [signupValues, setSignupValues] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...loginValues },
        { withCredentials: true },
      );
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000";
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setLoginValues({ email: "", password: "" });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...signupValues },
        { withCredentials: true },
      );
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000";
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setSignupValues({ email: "", username: "", password: "" });
  };

  return (
    <div className="container mt-6 mb-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="./media/images/Signup-Photoroom.png"
            style={{ width: "100%" }}
            alt="signup"
          />
        </div>

        <div className="col-6">
          {isLogin ? (
            <div className="card p-4">
              <h3 className="text-center mb-3">Login</h3>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={loginValues.email}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={loginValues.password}
                    onChange={handleLoginChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </span>
              </p>
            </div>
          ) : (
            <div className="card p-4">
              <h3 className="text-center mb-3">Signup</h3>
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={signupValues.email}
                    onChange={handleSignupChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={signupValues.username}
                    onChange={handleSignupChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={signupValues.password}
                    onChange={handleSignupChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </form>
              <p className="text-center mt-3">
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sign;
