import React from "react";
import styled from "styled-components";

const StyledContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledContentInsideContainer = styled.li`
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

const StyledContentLink = styled.a`
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

const StyledContentParagraph = styled.p`
  margin-top: 0;
`;

const TitledContentBlock = ({ content }) => (
  <StyledContentContainer>
    { content.map(item =>
      <StyledContentInsideContainer key={item.id}>
        <StyledContentLink
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{item.title}</h3>
          <StyledContentParagraph>{item.p}</StyledContentParagraph>
        </StyledContentLink>
      </StyledContentInsideContainer>
    )}
  </StyledContentContainer>
);

export default TitledContentBlock;
