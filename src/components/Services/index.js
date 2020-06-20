import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";

import StyledServices from "./StyledServices";

const services = [
  {
    id: uuid(),
    title: "Mentoria",
    description: "Ajudo profissionais a se desenvolverem para melhor se posicionarem no mercado, contribuir em comunidades, trabalhar no exterior, trabalhar em ambientes ágeis e muito mais",
    href: "https://talkingabouttesting.com/servicos/mentoria-coaching/",
  },
  {
    id: uuid(),
    title: "Consultoria",
    description: "Ajudo empresas e profissionais a implementarem práticas de programação extrema, lean e DevOps, para que entreguem software de qualidade aos seus clientes com agilidade",
    href: "https://talkingabouttesting.com/servicos/consultoria/",
  },
  {
    id: uuid(),
    title: "Desenvolvimento",
    description: "Desenvolvo testes end-to-end automatizados utilizando ferramentas modernas e boas práticas de mercado. Terceirize testes de GUI em seus projetos com quem já tem isso \"no sangue\"",
    href: "https://talkingabouttesting.com/servicos/desenvolvimento/",
  },
];

const Services = () =>
  <StyledServices>
    <div className="wrapper">
      <TitledContentBlock content={services}/>
    </div>
  </StyledServices>

export default Services;
