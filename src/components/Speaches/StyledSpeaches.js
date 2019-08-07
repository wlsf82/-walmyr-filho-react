import styled from "styled-components";

const StyledSpeaches = styled.div`
  padding: 48px 0;
  background-color: #ededed;
`;

const StyledSpeachesH2 = styled.h2`
  margin-top: 0;
`;

const StyledSpeachesContainer = styled.div`
  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledSpeachesBlock = styled.ul`
  flex-basis: calc(100% / 2 - 24px);
  border-radius: 3px;
  margin: 0;

  @media (min-width: 960px) {
    box-shadow: 1px 1px 3px -1px rgba(0,0,0,0.3);
  }
`;

const StyledSpeacheItem = styled.li`
  padding: 12px;
  list-style: none;
  margin-bottom: 2px;
  background-color: #fff;

  @media (min-width: 960px) {
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export {
  StyledSpeachesBlock,
  StyledSpeachesH2,
  StyledSpeachesContainer,
  StyledSpeacheItem
};

export default StyledSpeaches;