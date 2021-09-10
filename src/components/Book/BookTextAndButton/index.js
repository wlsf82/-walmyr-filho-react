import React from "react";

import {
  StyledBookH2,
  StyledBookH3,
  StyledBookH4,
  StyleBookDescription
} from "./StyledBookTextAndButton";

import BuyBookButton from "../BuyBookButton";

const book = "Livro";
const bookTitle = "Protractor";
const bookSubTitle = "Lições sobre testes end-to-end automatizados";
const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";

const BookTextAndButton = props =>
  <div className="wrapper">
    <StyleBookDescription>
      <StyledBookH2>{ book }</StyledBookH2>
      <StyledBookH3>{ bookTitle }</StyledBookH3>
      <StyledBookH4>{ bookSubTitle }</StyledBookH4>
      <p>Neste livro você encontrará uma coleção de boas práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</p>
      <BuyBookButton hrefValue={ bookUrl }>Compre o livro</BuyBookButton>
    </StyleBookDescription>
  </div>

export default BookTextAndButton;
