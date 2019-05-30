import React from "react";
import uuid from "uuid/v4";

import StyledCourses, {
  StyledCoursesH2,
  StyledCoursesContainer,
  StyledCoursesInsideContainer,
  StyledCoursesLink,
  StyledCoursesParagraph,
} from "./StyledCourses";

const courses = [
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/introducao-aos-testes-automatizados",
    title: "Testes automatizados",
    p: "Curso teórico sobre automação de testes em diversas camadas de aplicações",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/arquitetura-de-testes-com-protractor",
    title: "Protractor",
    p: "Curso prático sobre arquitetura de testes end-to-end com o framework Protractor",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.coursify.me/courses/testes-de-regressao-visual-com-backstopjs",
    title: "BackstopJS",
    p: "Curso prático sobre testes de regressão visual com a ferramenta BackstopJS",
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
        { courses.map(item =>
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