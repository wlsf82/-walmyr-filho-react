import React, { PureComponent } from "react";
import Button from "../Button";
import bookImage from "./assets/bookImg.png"
const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";
const relValue = "noopener noreferrer";
const targetValue = "_blank";

class Book extends PureComponent {
    render() {
        return (
            <div className="book">
                <h2>Livro</h2>
                <h3>
                    <a href={bookUrl} target={targetValue} rel={relValue}>Protractor - Lições sobre testes end-to-end automatizados</a>
                </h3>
                <p>Neste livro você encontrará uma coleção de boas práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</p>
                <Button
                    href={bookUrl}
                    target={targetValue}
                >
                    Compre o livro
                </Button>
                <a href={bookUrl} target={targetValue} rel={relValue}>
                    <img src={bookImage} alt="Livro de Protractor"/>
                </a>
            </div>
        );
    }
}

export default Book;
