import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import styled from "styled-components";
import wallet from "../assets/wallet.svg";
import transaction from "../assets/transaction.svg";
import importWallet from "../assets/importWallet.svg";
import ImportWalletDialog from "./ImportWalletDialog";

const SideNav = () => {
  const data = useLocation();
  const Heading = data.pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(false);
  const StyledSpan = styled.span`
    font-size: ${(props) => props.theme.textSize.secondary};
  `;
  const StyledButton = styled.button`
    font-size: ${(props) => props.theme.textSize.secondary};
    background-color: #161c23;
    border: none;
    color: ${(props) => props.theme.textcolor.other};
    padding: 10px 20px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;
  const handleOpenDialog = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen ? <ImportWalletDialog setIsOpen={setIsOpen} /> : null}
      <div className="sideNav-container">
        <div className="sideNav">
          <div className="links-container">
            <Link className="custom-link" to="/wallets">
              <img src={wallet} alt="" />
              <StyledSpan>Wallets</StyledSpan>
            </Link>
            <Link className="custom-link" to="/transactions">
              <img src={transaction} alt="" />
              <StyledSpan>Transactions</StyledSpan>
            </Link>
          </div>
          <div className="support">Support</div>
        </div>
        <div className="outlet-container">
          <div className="outlet-container__heading">
            <h1 className="heading">{Heading}</h1>
            {Heading === "wallets" ? (
              <StyledButton onClick={handleOpenDialog}>
                <img src={importWallet} alt="" />
                IMPORT WALLET
              </StyledButton>
            ) : null}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideNav;
