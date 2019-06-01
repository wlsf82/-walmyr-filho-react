import React from "react";
import Social from "../Social";

import StyledPageFooter, {
  StyledContactH2,
  StyledPageFooterAnchor
} from "./StyledPageFooter";

const PageFooter = () =>
  <StyledPageFooter>
    <div className="wrapper">
      <StyledContactH2>Contato</StyledContactH2>
      <StyledPageFooterAnchor>wlsf82@gmail.com</StyledPageFooterAnchor>
      <Social />
    </div>
  </StyledPageFooter>

export default PageFooter;