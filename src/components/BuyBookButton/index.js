import React from "react";
import StyledBuyBookButton from "./StyledBuyBookButton";

const BuyBookButton = props =>
  <StyledBuyBookButton
    href={ props.hrefValue }
    target="_blank"
    rel="noopener noreferrer"
  >
    { props.children }
  </StyledBuyBookButton>

export default BuyBookButton;