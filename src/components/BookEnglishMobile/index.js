import React from "react";

import StyledBook, {
  StyledBookContainer,
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyledBookImage,
  StyleBookDescription
} from "./StyledBook";

import BuyBookButton from "../BuyBookButton";
import bookImage from "./assets/bookcover.png"

const book = "Book";
const bookTitle = "Protractor";
const bookSubTitle = "Lessons learned about end-to-end test automation";
const bookUrl = "https://leanpub.com/end-to-end-testing-with-protractor";
const relValue = "noopener noreferrer";
const targetValue = "_blank";

const Book = () =>
  <StyledBook>
    <div className="wrapper">
      <StyledBookContainer>
        <StyleBookDescription>
          <StyledBookH2>{ book }</StyledBookH2>
          <StyledBookH3>{ bookTitle }</StyledBookH3>
          <StyledBookH4>{ bookSubTitle }</StyledBookH4>
          <p>In this book, you will find a collection of best practices to implement automated end-to-end tests in the development process of web applications, using the framework Protractor.</p>
          <BuyBookButton hrefValue={ bookUrl }>Buy the book</BuyBookButton>
        </StyleBookDescription>
        <a href={bookUrl} target={targetValue} rel={relValue}>
          <StyledBookImage src={bookImage} alt={ `${book}: ${bookTitle} - ${bookSubTitle}` }/>
        </a>
      </StyledBookContainer>
    </div>
  </StyledBook>

export default Book;
