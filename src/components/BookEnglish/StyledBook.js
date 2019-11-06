import styled from "styled-components";

const StyledBook = styled.div`
  display: none;

  @media (min-width: 960px) {
    padding: 48px 0;
    display: block;
    flex-direction: row;
    justify-content: start;
    text-align: left;
  }
`;

const StyledBookContainer = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: left;
  }
`;

const StyledBookH2 = styled.h2`
  margin-top: 0;
`;

const StyledBookH3 = styled.h3`
  margin-bottom: 12px;
`;

const StyledBookH4 = styled.h4`
  margin-top: 0;
  font-size: 120%;
`;

const StyleBookDescription = styled.div`
  margin: 0 auto 24px auto;

  @media (min-width: 960px) {
    max-width: 60%;
    margin-right: 0;
    margin-left: 48px;
  }
`;

const StyledBookImage = styled.img`
  max-width: 400px;
`;

export {
  StyledBookContainer,
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyledBookImage,
  StyleBookDescription
};

export default StyledBook;
