import React from "react";
import uuid from "uuid/v4";

import TitledContentBlock from "../TitledContentBlock";

import StyledCourses, { StyledCoursesH2 } from "./StyledCourses";

const courses1 = [
  {
    id: uuid(),
    href: "https://www.udemy.com/course/elementos-do-design-de-testes-automatizados/?referralCode=B0794A6F214DA875349E",
    title: "Elementos do Design de Testes Automatizados",
    description: "Aprenda os fundamentos essenciais para criar testes automatizados bem estruturados e de fácil manutenção.",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/cypress-playground/?referralCode=56D642D77624C195062C",
    title: "Cypress Playground",
    description: "Ambiente prático para experimentar e aprender Cypress de forma interativa (Cypress versão 13.13.3).",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?referralCode=5E367E0C332F3B967B6C",
    title: "Cypress, do Zero à Nuvem",
    description: "Do básico à gestão de testes na nuvem: aprenda a criar, executar e implementar testes automatizados em um pipeline de CI (Cypress versão 13.12.0).",
  },
];

const courses2 = [
  {
    id: uuid(),
    href: "https://www.udemy.com/course/cypress-simulator/?referralCode=90B4D45A98C81CF09710",
    title: "Cypress Simulator",
    description: "Crie testes robustos lidando com questões como captcha e banner de consentimento de cookies e execute-os em uma esteira de integração contínua (Cypress versão 13.17.0).",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-intermediario/?referralCode=F14505FB0076672E51A2",
    title: "Cypress Intermediário",
    description: "Otimize testes GUI com chamadas de API, restauração de sessão e estruturação avançada de projetos (Cypress versão 12.0.2)."
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-com-cypress-avancado/?referralCode=92639E4BD579A09A972D",
    title: "Cypress Avançado",
    description: "Domine técnicas avançadas para criar testes robustos, independentes e livres de flakiness (Cypress versão 6.6.0).",
  },
];

const courses3 = [
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-automatizados-e-ia-generativa/?referralCode=779B16AF44D60BAFB846",
    title: "Testes Automatizados e IA Generativa",
    description: "Torne-se mais produtivo(a) nas mais diversas tarefas de automação de testes com a ajuda de ferramentas de IA generativa.",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/boas-praticas-em-automacao-de-testes-com-cypress/?referralCode=53A9772BD676F93DC8A1",
    title: "Boas Práticas em Automação de Testes com Cypress",
    description: "Aprenda a identificar e eliminar más práticas, criando testes sustentáveis e de fácil manutenção (Cypress versão 12.8.1).",
  },
  {
    id: uuid(),
    href: "https://www.udemy.com/course/testes-end-to-end-com-cypress/?referralCode=BFC58FC7B29F2F37904",
    title: "Testes End-to-End com Cypress",
    description: "Desenvolva testes E2E completos incluindo validação de emails, upload de arquivos, lidando com iframes e CI otimizado (Cypress versão 12.15.0).",
  },
];

const Courses = () =>
  <StyledCourses>
    <div className="wrapper">
      <StyledCoursesH2>
        <a
          id="courses-h2-anchor"
          href="https://talking-about-testing.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cursos
        </a>
      </StyledCoursesH2>
      <TitledContentBlock content={courses1}/>
      <TitledContentBlock content={courses2} />
      <TitledContentBlock content={courses3}/>
    </div>
  </StyledCourses>

export default Courses;
