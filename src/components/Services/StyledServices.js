import styled from "styled-components";

const StyledServices = styled.div`
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-around;
  display: flex;
  justify-content: space-around;
  @media (max-width: 650px) {
    background-color: #fff;
    padding-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
    display: block;
    border-bottom: 5px dotted #f2f2f2;
  }
`;

const StyledServicesDiv = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  margin-top: 20px;
  vertical-align: text-top;
  width: calc(90% / 3);
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    display:table-row;
    width: 90%;
  }
`;

const StyledServicesH3 = styled.h3`
  color: #efa700;
`;

const StyledServicesParagraph = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export { StyledServicesDiv, StyledServicesH3, StyledServicesParagraph };

export default StyledServices;