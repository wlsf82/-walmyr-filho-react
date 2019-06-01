import React from "react";

import StyledPageHeader, {
    StyledPageHeaderAnchor,
    StyledPageHeaderH1,
    StyledPageHeaderH1Span
} from "./StyledPageHeader";

const PageHeader = () =>
  <StyledPageHeader>
    <StyledPageHeaderH1>
      <StyledPageHeaderAnchor href="#top">
        Walmyr <StyledPageHeaderH1Span>Lima e Silva </StyledPageHeaderH1Span>Filho
      </StyledPageHeaderAnchor>
    </StyledPageHeaderH1>
  </StyledPageHeader>

export default PageHeader;