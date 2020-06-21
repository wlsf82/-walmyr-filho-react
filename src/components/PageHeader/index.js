import React from "react";

import StyledPageHeader, {
    StyledPageHeaderH1,
    StyledPageHeaderH1Span
} from "./StyledPageHeader";

const PageHeader = () =>
  <StyledPageHeader>
    <StyledPageHeaderH1>
      <span style={{ cursor: 'pointer' }}>
        Walmyr <StyledPageHeaderH1Span>Lima e Silva </StyledPageHeaderH1Span>Filho
      </span>
    </StyledPageHeaderH1>
  </StyledPageHeader>

export default PageHeader;
