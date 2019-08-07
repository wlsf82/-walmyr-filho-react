import React from "react";

import StyledPageContent from "./StyledPageContent";

import Blog from "../Blog";
import Book from "../Book";
import Courses from "../Courses";
import GoToTopButton from "../GoToTopButton";
import Introduction from "../Introduction";
import Services from "../Services";
import Speaches from "../Speaches";

const PageContent = () =>
  <StyledPageContent>
    <Introduction />
    <Courses />
    <Blog />
    <Services />
    <Book />
    <Speaches />
    <GoToTopButton />
  </StyledPageContent>

export default PageContent;
