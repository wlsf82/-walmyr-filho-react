import React from "react";
import uuid from "uuid/v4";

import StyledServices, {
  StyledServicesContainer,
  StyledServicesInsideContainer,
  StyledServicesLink,
  StyledServicesParagraph,
} from "./StyledServices";

const services = [
  {
    id: uuid(),
    h3: "Coaching",
    p: "Ajudo profissionais a se desenvolverem para melhor se posicionarem no mercado, contribuir em comunidades, trabalhar no exterior, trabalhar em ambientes ágeis e muito mais",
    href: "https://talkingabouttesting.com/servicos/mentoria-coaching/",
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
    p: "Desenvolvo testes end-to-end automatizados utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de GUI em seus projetos com quem já tem isso \"no sangue\"",
    href: "https://talkingabouttesting.com/servicos/desenvolvimento/",
  },
];

const Services = () =>
  <StyledServices>
    <div className="wrapper">
      <StyledServicesContainer>
        { services.map(service =>
          <StyledServicesInsideContainer key={service.id}>
            <StyledServicesLink
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{service.h3}</h3>
              <StyledServicesParagraph>{service.p}</StyledServicesParagraph>
            </StyledServicesLink>
          </StyledServicesInsideContainer>
        )}
      </StyledServicesContainer>
    </div>
  </StyledServices>

export default Services;
