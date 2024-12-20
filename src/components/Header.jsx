import React from "react";
import logo from "../logo.svg";
import sync from "../assets/sync.svg";
import styled from "styled-components";

const Header = () => {
  const StyledSpan = styled.span`
    color: ${(props) => props.theme.textcolor.primary};
    font-size: ${(props) => props.theme.textSize.primary};
  `;

  return (
    <div className="header">
      <img src={logo} alt="cySync" />
      <div className="syncDiv">
        <img src={sync} alt="cySync" />
        <StyledSpan>Synced</StyledSpan>
      </div>
    </div>
  );
};

export default Header;
