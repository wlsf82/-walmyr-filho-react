import Button from "../Button";
import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const services = [
    {
        id: uuid(),
        h3: "Coaching",
        p: "Ajudo profissionais a se desenvolverem para melhor se posicionarem no mercado, contribuir em comunidades, trabalhar no exterior, e muito mais",
    },
    {
        id: uuid(),
        h3: "Consultoria",
        p: "Ajudo empresas e profissionais a implementarem práticas de programação extrema, lean e DevOps, para que entreguem software de qualidade aos seus clientes com agilidade",
    },
    {
        id: uuid(),
        h3: "Desenvolvimento",
        p: "Desenvolvo testes end-to-end automatizados utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de UI em seus projetos com quem já tem isso \"no sangue\"",
    },
];

class Services extends PureComponent {
    render() {
        return (
            <div className="services">
                { services.map(item =>
                    <div key={item.id}>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                        <Button
                            href={ `mailto: wlsf82@gmail.com?Subject=Informações sobre serviço de ${item.h3}` }
                            target=""
                        >
                            Entre em contato
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Services;
