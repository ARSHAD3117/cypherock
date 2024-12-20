import React from "react";
import bitcoin from "../assets/Bitcoin.svg";
import received from "../assets/received.svg";

const Transactions = () => {
  return (
    <div className="table-container">
      <span className="table-container__heading">Total Transactions-03</span>
      <table className="table-container__table">
        <tr>
          <th>Coin</th>
          <th>Wallet</th>
          <th>Amount</th>
          <th>Result</th>
          <th style={{ padding: "20px 20px 20px 0px" }}>Status</th>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" />
            <div className="table-container__date">
              <span>12/11/2020</span>
              <span>10:31:20 AM</span>
            </div>
          </td>
          <td style={{ position: "relative", right: "50px" }}>Aru</td>
          <td>0.5268 BTC</td>
          <td style={{ color: "#8484F1", position: "relative", left: "35px" }}>
            <img src={received} alt="" />
            RECEIVED
          </td>
          <td style={{ color: "#8484F1" }}>SUCCESS</td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" />
            <div className="table-container__date">
              <span>12/11/2020</span>
              <span>10:31:20 AM</span>
            </div>
          </td>
          <td style={{ position: "relative", right: "50px" }}>Aru</td>
          <td>0.5268 BTC</td>
          <td style={{ color: "#8484F1", position: "relative", left: "35px" }}>
            <img src={received} alt="" />
            RECEIVED
          </td>
          <td style={{ color: "#8484F1" }}>SUCCESS</td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" />
            <div className="table-container__date">
              <span>12/11/2020</span>
              <span>10:31:20 AM</span>
            </div>
          </td>
          <td style={{ position: "relative", right: "50px" }}>Aru</td>
          <td>0.5268 BTC</td>
          <td style={{ color: "#8484F1", position: "relative", left: "35px" }}>
            <img src={received} alt="" />
            RECEIVED
          </td>
          <td style={{ color: "#8484F1" }}>SUCCESS</td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" />
            <div className="table-container__date">
              <span>12/11/2020</span>
              <span>10:31:20 AM</span>
            </div>
          </td>
          <td style={{ position: "relative", right: "50px" }}>Aru</td>
          <td>0.5268 BTC</td>
          <td style={{ color: "#8484F1", position: "relative", left: "35px" }}>
            <img src={received} alt="" />
            RECEIVED
          </td>
          <td style={{ color: "#8484F1" }}>SUCCESS</td>
        </tr>
      </table>
    </div>
  );
};

export default Transactions;
