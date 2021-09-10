import styled from "styled-components";

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
    margin-right: 48px;
    margin-left: 0;
  }
`;

export {
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyleBookDescription
};