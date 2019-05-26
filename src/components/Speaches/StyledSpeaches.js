import styled from "styled-components";

const StyledSpeaches = styled.div`
  background-color: #f2f2f2;
  padding-bottom: 30px;
  padding-top: 6px;
  @media (max-width: 650px) {
    align-content: center;
    background-color: #fff;
    padding: 12px;
  }
`;

const StyledSpeachesLeftDiv = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  vertical-align: text-top;
  width: calc(90% / 2);
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    margin: auto auto -26px auto;
    width: 90%;
    padding: 0;
  }
`;

const StyledSpeachesRightDiv = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  vertical-align: text-top;
  width: calc(90% / 2);
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    margin: auto;
    width: 90%;
    padding: 0;
  }
`;

const StyledSpeachesH3 = styled.h3`
  text-transform: none;
`;

export { StyledSpeachesLeftDiv, StyledSpeachesRightDiv, StyledSpeachesH3 };

export default StyledSpeaches;