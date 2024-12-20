import React from "react";
import close from "../assets/close.svg";

const ImportWalletDialog = ({ setIsOpen }) => {
  return (
    <div className="dialog-container">
      <div className="dialog">
        <div className="dialog-heading">
          <h1>Import Wallet</h1>
          <img
            onClick={() => setIsOpen(false)}
            className="dialog-close"
            src={close}
            alt=""
          />
        </div>
        <div className="dialog-body">
          <label>
            <span>Enter your wallet name :</span>
            <input type="text"></input>
          </label>
          <label>
            <span>Enter your Mnemonic :</span>
            <input style={{ height: "90px" }} type="text"></input>
          </label>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ImportWalletDialog;
