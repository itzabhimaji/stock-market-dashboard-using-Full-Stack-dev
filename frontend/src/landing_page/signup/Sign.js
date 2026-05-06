import React, { useState } from "react";

function Sign() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mt-6 mb-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-6">
          <img
            src="./media/images/Signup-Photoroom.png"
            style={{ width: "100%" }}
            alt="signup"
          />
        </div>

        <div className="col-6">
          {/* LOGIN CARD */}
          {isLogin ? (
            <div
              className="card p-4"
              style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
            >
              <h3 className="text-center mb-3">Login</h3>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button className="btn btn-dark w-100">Submit</button>
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
            /* SIGNUP CARD */
            <div className="card p-4">
              <h3 className="text-center mb-3">Signup</h3>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button className="btn btn-dark w-100">Submit</button>
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
    </div>
  );
}

export default Sign;
