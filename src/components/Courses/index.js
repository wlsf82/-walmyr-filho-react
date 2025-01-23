import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";

import StyledCourses, { StyledCoursesH2 } from "./StyledCourses";

const courses1 = [
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?referralCode=5E367E0C332F3B967B6C",
    title: "Cypress, do Zero à Nuvem",
    description: "Curso prático sobre testes automatizados com Cypress utilizando funcionalidades básicas até a execução na integração contínua",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-intermediario/?referralCode=F14505FB0076672E51A2",
    title: "Cypress intermediário",
    description: "Curso prático sobre como otimizar testes de GUI utilizando chamadas de APIs",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-avancado/?referralCode=92639E4BD579A09A972D",
    title: "Cypress avançado",
    description: "Curso prático sobre como testar o frontend desacoplado do backend",
  },
];

const courses2 = [
  {
    id: uuid(),
    href: "https://www.udemy.com/course/cypress-playground/?referralCode=56D642D77624C195062C",
    title: "Cypress Playground",
    description: "Curso prático de Cypress que aborda desde conceitos básicos até avançados",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/boas-praticas-em-automacao-de-testes-com-cypress/?referralCode=53A9772BD676F93DC8A1",
    title: "Boas práticas com Cypress",
    description: "Curso prático de boas práticas em automação de testes com Cypress"
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-end-to-end-com-cypress/?referralCode=BFC58FC7B29F2F37904D",
    title: "Testes end-to-end com Cypress",
    description: "Curso completo de Cypress com integração contínua usando GitHub Actions",
  },
];

const Courses = () =>
  <StyledCourses>
    <div className="wrapper">
      <StyledCoursesH2>
        <a
          id="courses-h2-anchor"
          href="https://udemy.com/user/walmyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cursos
        </a>
      </StyledCoursesH2>
      <TitledContentBlock content={courses1}/>
      <TitledContentBlock content={courses2}/>
    </div>
  </StyledCourses>

export default Courses;
