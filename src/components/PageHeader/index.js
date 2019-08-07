import React from "react";

import StyledPageHeader, {
    StyledPageHeaderH1,
    StyledPageHeaderH1Span
} from "./StyledPageHeader";

const PageHeader = () =>
  <StyledPageHeader>
    <StyledPageHeaderH1>
      <a href="#top">
        Walmyr <StyledPageHeaderH1Span>Lima e Silva </StyledPageHeaderH1Span>Filho
      </a>
    </StyledPageHeaderH1>
  </StyledPageHeader>

export default PageHeader;
