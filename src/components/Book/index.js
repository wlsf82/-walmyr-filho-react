import React from "react";

import StyledBook, {
  StyledBookContainer,
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyledBlogParagraph,
  StyledBookImage,
  StyleBookDescription,
  StyleBookPreview
} from "./StyledBook";

import BuyBookButton from "../BuyBookButton";
import bookImage from "./assets/bookcover.png"

const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";
const relValue = "noopener noreferrer";
const targetValue = "_blank";

const Book = () =>
  <StyledBook>
    <div className="wrapper">
      <StyledBookContainer>
        <StyleBookDescription>
          <StyledBookH2>Livro</StyledBookH2>
          <StyledBookH3>Protractor</StyledBookH3>
          <StyledBookH4>Lições sobre testes end-to-end automatizados</StyledBookH4>
          <StyledBlogParagraph>Neste livro você encontrará uma coleção de boas práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</StyledBlogParagraph>
          <BuyBookButton />
        </StyleBookDescription>
        <StyleBookPreview>
          <a href={bookUrl} target={targetValue} rel={relValue}>
            <StyledBookImage src={bookImage} alt="Livro: Protractor - Lições sobre testes end-to-end automatizados"/>
          </a>
        </StyleBookPreview>
      </StyledBookContainer>
    </div>
  </StyledBook>

export default Book;