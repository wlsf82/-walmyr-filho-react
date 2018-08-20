import React from "react";

import StyledPageFooter, { StyledPageFooterAnchor } from "./StyledPageFooter";

import Social from "../Social";

const PageFooter = () =>
  <StyledPageFooter>
    <h4>Entre em contato</h4>
    <StyledPageFooterAnchor>wlsf82@gmail.com</StyledPageFooterAnchor>
    <Social />
  </StyledPageFooter>

export default PageFooter;
