import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";

import StyledCourses, { StyledCoursesH2 } from "./StyledCourses";

const courses1 = [
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-basico",
    title: "Cypress básico",
    description: "Curso prático sobre testes automatizados com Cypress utilizando funcionalidades básicas",
  },
  {
    id: uuid(),
    href: "https://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-intermediario#",
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
    href: "https://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-e-percy-basico",
    title: "Cypress e Percy básico",
    description: "Curso prático sobre testes de comparação de snapshots",
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

const courses3 = [
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/arquitetura-de-testes-com-protractor",
    title: "Protractor",
    description: "Curso prático sobre arquitetura de testes end-to-end com o framework Protractor",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-de-regressao-visual-com-backstopjs",
    title: "BackstopJS",
    description: "Curso prático sobre testes de regressão visual com a ferramenta BackstopJS",
  },
  {
    id: uuid(),
    href: "https://talkingabouttesting.coursify.me/courses/introducao-aos-testes-automatizados",
    title: "Testes automatizados",
    description: "Curso teórico sobre automação de testes em diversas camadas de aplicações",
  },
]

const Courses = () =>
  <StyledCourses>
    <div className="wrapper">
      <StyledCoursesH2>
        <a
          id="courses-h2-anchor"
          href="http://talkingabouttesting.coursify.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cursos
        </a>
      </StyledCoursesH2>
      <TitledContentBlock content={courses1}/>
      <TitledContentBlock content={courses2}/>
      <TitledContentBlock content={courses3}/>
    </div>
  </StyledCourses>

export default Courses;
