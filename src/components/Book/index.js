import React, { PureComponent } from "react";

class Book extends PureComponent {
    render() {
        return (
            <div className="book">
                <h2>Livro</h2>
                <h3>
                    <a href="https://www.casadocodigo.com.br/products/livro-protractor" target="_blank" rel="noopener noreferrer">Protractor - Lições sobre testes end-to-end automatizados</a>
                </h3>
                <p>Neste livro você irá encontrar uma coleção de práticas para implementar testes end-to-end automatizados ao processo de desenvolvimento de aplicações web, utilizando o framework Protractor.</p>
            </div>
        );
    }
}

export default Book;
