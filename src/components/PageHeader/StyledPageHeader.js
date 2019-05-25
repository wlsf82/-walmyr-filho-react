import styled from "styled-components";

const StyledPageHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  float: left;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const StyledPageHeaderAnchor = styled.a`
  transition: .7s all;
`;

const StyledPageHeaderH1 = styled.h1`
  @media only screen and (max-device-width: 650px) {
    font-size: 170%;
  }
`;

const StyledPageHeaderH1Span = styled.span`
  @media only screen and (max-device-width: 650px) {
    display: none;
  }
`;

export { StyledPageHeaderAnchor, StyledPageHeaderH1, StyledPageHeaderH1Span };

export default StyledPageHeader;