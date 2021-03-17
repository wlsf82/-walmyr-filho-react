import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";
import ThinBanner from "../ThinBanner";

import StyledCourses, { StyledCoursesH2 } from "./StyledCourses";

const topCourses = [
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
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-avancado/",
    title: "Cypress avançado",
    description: "Curso prático sobre como testar o frontend desacoplado do backend",
  },
];

const bottomCourses = [
  {
    id: uuid(),
    href: "https://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-e-percy-basico",
    title: "Cypress e Percy básico",
    description: "Curso prático sobre testes de comparação de snapshots",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-de-regressao-visual-com-backstopjs",
    title: "BackstopJS",
    description: "Curso prático sobre testes de regressão visual com a ferramenta BackstopJS",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/arquitetura-de-testes-com-protractor",
    title: "Protractor",
    description: "Curso prático sobre arquitetura de testes end-to-end com o framework Protractor",
  },
];

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
      <TitledContentBlock content={topCourses}/>
      <TitledContentBlock content={bottomCourses}/>
    </div>
    <ThinBanner />
  </StyledCourses>

export default Courses;
