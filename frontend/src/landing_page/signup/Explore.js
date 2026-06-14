import React from "react";

function Explore() {
  return (
    <div className="container mb-5 mt-5">
      <h2 className="text-muted text-center mb-4 mt-4">
        Investment options with Zerodha demat account
      </h2>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-2 text-end">
          <img
            src="./media/images/Stocks-Photoroom.png"
            style={{ width: "80%" }}
          />
        </div>

        <div className="col-4">
          <h1>Stocks</h1>
          <p>
            Invest in all exchange-listed <br /> securities
          </p>
        </div>

        <div className="col-2 text-end">
          <img
            src="./media/images/Mutual-Photoroom.png"
            style={{ width: "80%" }}
          />
        </div>

        <div className="col-4">
          <h1>Mutual Funds</h1>
          <p>
            Invest in commission-free direct <br /> mutual funds
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-4 mt-4">
        <div className="col-2 text-end">
          <img
            src="./media/images/IPO-Photoroom.png"
            style={{ width: "80%" }}
          />
        </div>

        <div className="col-4">
          <h1>IPO</h1>
          <p>
            Apply to the latest IPOs instantly
            <br /> via UPI
          </p>
        </div>

        <div className="col-2 text-end">
          <img
            src="./media/images/Futures-Photoroom.png"
            style={{ width: "80%" }}
          />
        </div>

        <div className="col-4">
          <h1>Futures & options</h1>
          <p>
            Hedge and mitigate market risk
            <br /> through simplified F&O trading
          </p>
        </div>
      </div>
      <div
        className="row text-center"
        style={{ marginLeft: "35%", marginRight: "35%" }}
      >
        <button
          type="button"
          className="btn btn-primary mb-3 mt-3"
          style={{ fontSize: "150%" }}
        >
          Explore Investment
        </button>
      </div>
    </div>
  );
}

export default Explore;
