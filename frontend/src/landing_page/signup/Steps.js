import React from "react";

function Steps() {
  return (
    <div
      className="container-fluid px-0 mt-5 mb-5 "
      style={{ backgroundColor: "rgb(240,240,240)" }}
    >
      <div className="text-center mb-5">
        <h2>Steps to open a demat account with Zerodha</h2>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./media/images/Step-Photoroom.png"
              alt="steps"
              style={{ width: "90%", cursor: "pointer" }}
            />
          </a>
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-center mb-4">
            <div className="me-3">
              <span className="border rounded-circle p-2">01</span>
            </div>
            <h4 className="mb-0">Enter the requested details</h4>
          </div>
          <hr />

          <div className="d-flex align-items-center mb-4">
            <div className="me-3">
              <span className="border rounded-circle p-2">02</span>
            </div>
            <h4 className="mb-0">Complete e-sign & verification</h4>
          </div>
          <hr />

          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="border rounded-circle p-2">03</span>
            </div>
            <h4 className="mb-0">Start investing!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
