import React, { PureComponent } from "react";
import Button from "../Button";
import bookImage from "./assets/bookImg.png"
const bookUrl = "https://www.casadocodigo.com.br/products/livro-protractor";

class Book extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book">
                <h2>Livro</h2>
                <h3>
                    <a href={bookUrl} target="_blank" rel="noopener noreferrer">Protractor - Lições sobre testes end-to-end automatizados</a>
                </h3>
                <p>Neste livro você irá encontrar uma coleção de práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</p>
                <Button>Compre o livro</Button>
                <a href={bookUrl} target="_blank" rel="noopener noreferrer">
                    <img src={bookImage} alt="Livro de Protractor"/>
                </a>
            </div>
        );
    }
}

export default Book;
