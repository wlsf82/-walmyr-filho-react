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

const book = "Livro";
const bookTitle = "Protractor";
const bookSubTitle = "Lições sobre testes end-to-end automatizados";
const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";
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
          <p>Uma coleção de boas práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</p>
          <BuyBookButton hrefValue={ bookUrl }>Compre o livro</BuyBookButton>
        </StyleBookDescription>
        <a href={bookUrl} target={targetValue} rel={relValue}>
          <StyledBookImage src={bookImage} alt={ `${book}: ${bookTitle} - ${bookSubTitle}` }/>
        </a>
      </StyledBookContainer>
    </div>
  </StyledBook>

export default Book;
