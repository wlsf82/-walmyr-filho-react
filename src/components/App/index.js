import React from "react";

import StyledApp from "./StyledApp";

import PageContent from "../PageContent";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";

const App = () =>
  <StyledApp>
    <PageHeader />
    <PageContent />
    <PageFooter />
  </StyledApp>

export default App;
