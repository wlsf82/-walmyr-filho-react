import React from "react";

import { SingleLineAnchoredBlock } from "./SingleLineAnchoredBlock";

import StyledSpeaches, {
  StyledSpeachesH2,
  StyledSpeachesContainer
} from "./StyledSpeaches";

import { leftSideSpeaches } from "./partials/leftSideSpeaches";
import { rightSideSpeaches } from "./partials/rightSideSpeaches";

const Speaches = () =>
  <StyledSpeaches>
    <div className="wrapper">
      <StyledSpeachesH2>Palestras e eventos</StyledSpeachesH2>
      <StyledSpeachesContainer>
        <SingleLineAnchoredBlock lines={leftSideSpeaches} />
        <SingleLineAnchoredBlock lines={rightSideSpeaches} />
      </StyledSpeachesContainer>
    </div>
  </StyledSpeaches>

export default Speaches;
