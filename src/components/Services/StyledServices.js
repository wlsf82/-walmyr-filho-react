import styled from "styled-components";

const StyledServices = styled.div`
  padding: 48px 0;
  background-color: #ededed;
`;

const StyledServicesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledServicesInsideContainer = styled.li`
  list-style: none;
  margin-bottom: 24px;
  background: #fff;
  box-shadow: 1px 1px 3px -1px rgba(0,0,0, 0.3);
  transition: background 0.3s ease;

  :hover {
    background-color: rgba(240, 165, 0, 0.7);
  }

  @media (min-width: 960px) {
    flex-basis: calc(100% / 3 - 20px)
  }
`;

const StyledServicesLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  border-radius: 3px;

  :hover {
    color: #fff;
    text-shadow: 1px 1px 0px rgba(0,0,0, 0.5);
  }
`;

const StyledServicesParagraph = styled.p`
  margin-top: 0;
`;

export {
  StyledServicesContainer,
  StyledServicesInsideContainer,
  StyledServicesLink,
  StyledServicesParagraph
};

export default StyledServices;
