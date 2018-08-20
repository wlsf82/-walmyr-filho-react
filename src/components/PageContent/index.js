import React from "react";

import "./index.css";
import "./index-mobile.css";

import Blog from "../Blog";
import Book from "../Book";
import Courses from "../Courses";
import GoToTopButton from "../GoToTopButton";
import Introduction from "../Introduction";
import Services from "../Services";
import Speaches from "../Speaches";

const PageContent = () =>
  <div className="main-content">
    <Introduction />
    <Courses />
    <Blog />
    <Services />
    <Book />
    <Speaches />
    <GoToTopButton />
  </div>

export default PageContent;
