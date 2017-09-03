import Button from "../Button";
import React, { PureComponent } from "react";
const serviceButtonLabel = "Saiba mais sobre o serviço";

class Services extends PureComponent {
    render() {
        return (
            <div className="services">
                <h2>Serviços</h2>
                <div>
                    <h3>Coaching</h3>
                    <p>Ajudo profissionais a se desenvolverem para conseguirem melhores oportunidades no mercado, contribuir em comunidades, morar no exterior, e muito mais</p>
                    <Button>{ serviceButtonLabel }</Button>
                </div>
                <div>
                    <h3>Consultoria</h3>
                    <p>Ajudo empresas e profissionais a implementarem práticas de programação extrema, para que entreguem software de qualidade aos seus clientes</p>
                    <Button>{ serviceButtonLabel }</Button>
                </div>
                <div>
                    <h3>Desenvolvimento</h3>
                    <p>Desenvolvo testes automatizados de UI utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de UI com quem já tem isso "no sangue"</p>
                    <Button>{ serviceButtonLabel }</Button>
                </div>
            </div>
        );
    }
}

export default Services;
