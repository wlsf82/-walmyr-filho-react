import React from "react";

import StyledPageContent from "./StyledPageContent";

import Blog from "../Blog";
import Book from "../Book";
import BookEnglish from "../BookEnglish";
import BookEnglishMobile from "../BookEnglishMobile";
import Courses from "../Courses";
import GoToTopButton from "../GoToTopButton";
import Introduction from "../Introduction";
import Speaches from "../Speaches";

const PageContent = () =>
  <StyledPageContent>
    <Introduction />
    <Courses />
    <Blog />
    <Book />
    <BookEnglish />
    <BookEnglishMobile />
    <Speaches />
    <GoToTopButton />
  </StyledPageContent>

export default PageContent;
