import React from "react";

import {
  StyledSpeachesBlock,
  StyledSpeacheItem
} from "./StyledSpeaches";

export const SingleLineAnchoredBlock = ({ lines }) => (
  <StyledSpeachesBlock>
    { lines.map(item =>
      <StyledSpeacheItem key={item.id}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
      </StyledSpeacheItem>
    )}
  </StyledSpeachesBlock>
);
