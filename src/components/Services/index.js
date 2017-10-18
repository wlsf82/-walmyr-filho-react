import Button from "../Button";
import React, { PureComponent } from "react";
import uuid from "uuid/v4";
const serviceButtonLabel = "Saiba mais sobre o serviço";
const services = [
    {
        id: uuid(),
        h3: "Coaching",
        p: "Ajudo profissionais a se desenvolverem para conseguirem melhores oportunidades no mercado, contribuir em comunidades, morar no exterior, e muito mais",
    },
    {
        id: uuid(),
        h3: "Consultoria",
        p: "Ajudo empresas e profissionais a implementarem práticas de programação extrema para que entreguem software de qualidade aos seus clientes",
    },
    {
        id: uuid(),
        h3: "Desenvolvimento",
        p: "Desenvolvo testes automatizados de UI utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de UI com quem já tem isso \"no sangue\"",
    },
];

class Services extends PureComponent {
    render() {
        return (
            <div className="services">
                <h2>Serviços</h2>
                { services.map( item =>
                    <div key={item.id}>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                        <Button
                            href={ "mailto: wlsf82@gmail.com?Subject=Informações sobre serviço de " + item.h3 }
                            target=""
                        >
                            { serviceButtonLabel }
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Services;
