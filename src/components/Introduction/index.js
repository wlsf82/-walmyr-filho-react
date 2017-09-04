import React, { PureComponent } from "react";

const paragraphs = [
    {
        paragraph: "Sou um desenvolvedor de software focado em testes automatizados e integração/entrega contínua e apaixonado pelo que faz",
    },
    {
        paragraph: "Ajudo pessoas a se tornarem melhores profissionais atravéz do uso de boas práticas de mercado",
    },
    {
        paragraph: "Todos os dias busco aprender algo novo, pois acredito que o aprendizado não tem fim.",
    },
];

class Introduction extends PureComponent {
    render() {
        return (
            <div className="introduction">
            { paragraphs.map( item =>
                <p>{item.paragraph}</p>
            )}
            </div>
        );
    }
}

export default Introduction;
