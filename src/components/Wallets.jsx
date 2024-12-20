import React from "react";
import bitcoin from "../assets/Bitcoin.svg";
import deleteIcon from "../assets/delete.svg";

const Wallets = () => {
  return (
    <div className="table-container">
      <span className="table-container__heading">Total Coins-7</span>
      <table className="table-container__table">
        <tr>
          <th>Coin</th>
          <th>Holding</th>
          <th>Actions</th>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" /> BITCOIN
          </td>
          <td style={{ marginRight: "50px" }}>BTC 0.00256</td>
          <td>
            <img src={deleteIcon} alt="" />
          </td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" /> BITCOIN
          </td>
          <td style={{ marginRight: "50px" }}>BTC 0.00256</td>
          <td>
            <img src={deleteIcon} alt="" />
          </td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" /> BITCOIN
          </td>
          <td style={{ marginRight: "50px" }}>BTC 0.00256</td>
          <td>
            <img src={deleteIcon} alt="" />
          </td>
        </tr>
        <tr className="table-container__row">
          <td>
            <img src={bitcoin} alt="" /> BITCOIN
          </td>
          <td style={{ marginRight: "50px" }}>BTC 0.00256</td>
          <td>
            <img src={deleteIcon} alt="" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Wallets;
