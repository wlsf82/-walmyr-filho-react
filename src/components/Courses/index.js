import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";
import ThinBanner from "../ThinBanner";

import StyledCourses, { StyledCoursesH2 } from "./StyledCourses";

const topCourses = [
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/introducao-aos-testes-automatizados",
    title: "Testes automatizados",
    p: "Curso teórico sobre automação de testes em diversas camadas de aplicações",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-basico",
    title: "Cypress básico",
    p: "Curso prático sobre testes automatizados com Cypress utilizando funcionalidades básicas",
  },
  {
    id: uuid(),
    href: "https://talkingabouttesting.coursify.me/courses/testes-automatizados-com-cypress-intermediario#",
    title: "Cypress intermediário",
    p: "Curso prático sobre como otimizar testes de GUI utilizando chamadas de APIs",
  },
];

const bottomCourses = [
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-de-regressao-visual-com-backstopjs",
    title: "BackstopJS",
    p: "Curso prático sobre testes de regressão visual com a ferramenta BackstopJS",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/arquitetura-de-testes-com-protractor",
    title: "Protractor",
    p: "Curso prático sobre arquitetura de testes end-to-end com o framework Protractor",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/mini-curso-testes-de-regressao-visual-com-backstop-config",
    title: "backstop-config",
    p: "Curso prático sobre testes de regressão visual para webistes estáticos",
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
