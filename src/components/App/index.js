import React from "react";

import "./index.css";
import "./index-mobile.css";

import PageContent from "../PageContent";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";

const App = () =>
  <div className="App">
    <PageHeader />
    <PageContent />
    <PageFooter />
  </div>

export default App;
