import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 2px 0;
`;

function MenuIcon() {
    return (
        <div>
            <StyledIcon />
            <StyledIcon />
            <StyledIcon />
        </div>
    );
}

export default MenuIcon;