import React from "react";
import uuid from "uuid/v4";

import StyledCourses, {
  StyledCoursesH2,
  StyledCoursesContainer,
  StyledCoursesInsideContainer,
  StyledCoursesLink,
  StyledCoursesParagraph,
} from "./StyledCourses";

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
      <StyledCoursesContainer>
        { topCourses.map(item =>
          <StyledCoursesInsideContainer key={item.id}>
            <StyledCoursesLink
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
            >
              <h3>{item.title}</h3>
              <StyledCoursesParagraph>{item.p}</StyledCoursesParagraph>
            </StyledCoursesLink>
          </StyledCoursesInsideContainer>
        )}
      </StyledCoursesContainer>
    </div>
  </StyledCourses>

export default Courses;
