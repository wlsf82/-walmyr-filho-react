import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const paragraphs = [
    {
        id: uuid(),
        paragraph: "Sou um desenvolvedor de software focado em testes automatizados e integração/entrega contínua e apaixonado pelo que faz.",
    },
    {
        id: uuid(),
        paragraph: "Ajudo pessoas a se tornarem melhores profissionais atravéz do uso de boas práticas de mercado e conscientização.",
    },
    {
        id: uuid(),
        paragraph: "Todos os dias busco aprender algo novo, pois acredito que o aprendizado não tem fim.",
    },
];

class Introduction extends PureComponent {
    render() {
        return (
            <div className="introduction">
            { paragraphs.map(item =>
                <p key={item.id}>{item.paragraph}</p>
            )}
            </div>
        );
    }
}

export default Introduction;
