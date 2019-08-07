import React from "react";
import StyledGoToTopButton from "./StyledGoToTopButton";

const GoToTopButton = () =>
  <StyledGoToTopButton
    id="go-to-top"
    href="#top"
    rel="noopener noreferrer"
    target="_self"
    title="Voltar para o topo da página"
  >
    <span role="img" aria-label="Top">🔝</span>
  </StyledGoToTopButton>

export default GoToTopButton;
