import React from "react";

import StyledPageHeader,
  { StyledPageHeaderAnchor, StyledPageHeaderH1, StyledPageHeaderH1Span } from "./StyledPageHeader";

import "./index.css";
import "./index-mobile.css";

const PageHeader = () =>
  <StyledPageHeader>
    <div>
      <StyledPageHeaderH1>
        <StyledPageHeaderAnchor href="#top">
          Walmyr <StyledPageHeaderH1Span>Lima e Silva </StyledPageHeaderH1Span>Filho
        </StyledPageHeaderAnchor>
      </StyledPageHeaderH1>
    </div>
  </StyledPageHeader>

export default PageHeader;
