import Button from "../Button";
import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const services = [
    {
        id: uuid(),
        h3: "Coaching",
        p: "Ajudo profissionais a se desenvolverem para melhor se posicionarem no mercado, contribuir em comunidades, trabalhar no exterior, trabalhar em ambientes ágeis e muito mais",
        href: "https://talkingabouttesting.com/mentoria-coaching/",
    },
    {
        id: uuid(),
        h3: "Consultoria",
        p: "Ajudo empresas e profissionais a implementarem práticas de programação extrema, lean e DevOps, para que entreguem software de qualidade aos seus clientes com agilidade",
        href: "https://talkingabouttesting.com/servicos/consultoria/",
    },
    {
        id: uuid(),
        h3: "Desenvolvimento",
        p: "Desenvolvo testes end-to-end automatizados utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de UI em seus projetos com quem já tem isso \"no sangue\"",
    },
];

class Services extends PureComponent {
    showServiceHeaderAsLinkOrNot(service) {
        return service.href ?
            <h3>
                <a href={service.href} target="_blank">{service.h3}</a>
            </h3> :
            <h3>{service.h3}</h3>
    }

    render() {
        return (
            <div className="services">
                { services.map(item =>
                    <div key={item.id}>
                        { this.showServiceHeaderAsLinkOrNot(item) }
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
