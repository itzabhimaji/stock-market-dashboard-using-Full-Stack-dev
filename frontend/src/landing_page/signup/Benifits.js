import React from "react";

function Benefits() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="./media/images/Benifit-Photoroom.png"
            alt="benefits"
            style={{ width: "80%" }}
          />

          <h2 className="mt-4 text-muted">
            Benefits of opening a Zerodha
            <br /> demat account
          </h2>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <h4>Unbeatable pricing</h4>
            <p className="text-muted">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>

          <div className="mb-4">
            <h4>Best investing experience</h4>
            <p className="text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>

          <div className="mb-4">
            <h4>No spam or gimmicks</h4>
            <p className="text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>

          <div>
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
