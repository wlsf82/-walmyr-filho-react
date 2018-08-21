import React from "react";

import StyledBook, { StyledBlogParagraph, StyledBookImage } from "./StyledBook";

import BuyBookButton from "../BuyBookButton";
import bookImage from "./assets/bookImg.png"

const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";
const relValue = "noopener noreferrer";
const targetValue = "_blank";

const Book = () =>
  <StyledBook>
    <h2>Livro</h2>
    <h3>
      <a href={bookUrl} target={targetValue} rel={relValue}>Protractor - Lições sobre testes end-to-end automatizados</a>
    </h3>
    <StyledBlogParagraph>Neste livro você encontrará uma coleção de boas práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</StyledBlogParagraph>
    <BuyBookButton />
    <a href={bookUrl} target={targetValue} rel={relValue}>
      <StyledBookImage src={bookImage} alt="Livro de Protractor"/>
    </a>
  </StyledBook>

export default Book;
