import styled from "styled-components";

const StyledPageFooter = styled.div`
  background-color: #2c313f;
  color: white;
  font-size: 30px;
  padding-bottom: 30px;
  padding-top: 1px;
`;

const StyledPageFooterAnchor = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: white;
    font-size: 26px;
  }
`;

export { StyledPageFooterAnchor };

export default StyledPageFooter;
