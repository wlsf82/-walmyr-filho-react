import React from "react";
import uuid from "uuid/v4";

import StyledSpeaches, {
  StyledSpeachesH2,
  StyledSpeachesContainer,
  StyledSpeachesBlock,
  StyledSpeacheItem
} from "./StyledSpeaches";

const leftSideSpeaches = [
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/esquenta-qax",
    title: "Esquenta QAXperience 2020"
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/agile-testing-a-quality-culture-in-the-companys-core-business",
    title: "Agile, Testing & DevOps Showcase Manchester 2020"
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/how-to-kill-software-quality-in-five-steps",
    title: "Agile, Testing & DevOps Showcase Amsterdam 2020"
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/how-to-kill-software-quality-in-five-steps",
    title: "DevOpsDays Warsaw 2019",
  },
  {
    id: uuid(),
    href: "https://speakerdeck.com/wlsf82/testes-de-regressao-visual-xpconfbr-2018-online",
    title: "XP Conf BR Online 2018",
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/lessons-learned-as-a-software-engineer-working-at-appearin",
    title: "Agile Tour Lithuania 2017",
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/estrategias-para-o-uso-de-integracao-e-entrega-continua-com-gocd",
    title: "Conferência Agile Testers 2017",
  },
  {
    id: uuid(),
    href: "https://www.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-lean-ireland-2017",
    title: "Agile Lean Ireland 2017",
  },
];

const rightSideSpeaches = [
  {
    id: uuid(),
    href: "https://goo.gl/11VEhl",
    title: "TDC Floripa 2016",
  },
  {
    id: uuid(),
    href: "http://www.slideshare.net/walmyrlimasilvafilho/protractor-style-guide-agile-testers-conference-2016",
    title: "Conferência Agile Testers 2016",
  },
  {
    id: uuid(),
    href: "http://www.slideshare.net/walmyrlimasilvafilho/primeiros-passos-com-protractor-gutssc",
    title: "GUTS-SC Janeiro de 2016",
  },
  {
    id: uuid(),
    href: "http://pt.slideshare.net/walmyrlimasilvafilho/protractor-visual-review-2",
    title: "TDC Porto Alegre 2015",
  },
  {
    id: uuid(),
    href: "http://pt.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-trends-floripa",
    title: "Agile Trends Floripa 2015",
  },
  {
    id: uuid(),
    href: "http://www.thedevelopersconference.com.br/tdc/2015/florianopolis/trilha-testes",
    title: "TDC Floripa 2015",
  },
  {
    id: uuid(),
    href: "http://guts-rs.blogspot.com.br/2015/08/saiba-o-que-rolou-no-evento-de.html",
    title: "GUTS-RS Agosto de 2015",
  },
  {
    id: uuid(),
    href: "http://talkingabouttesting.com/tag/n-ways-to-test/",
    title: "N ways to test 2015",
  },
];

const relValue = "noopener noreferrer";
const targetValue = "_blank";

const Speaches = () =>
  <StyledSpeaches>
    <div className="wrapper">
      <StyledSpeachesH2>Palestras e eventos</StyledSpeachesH2>
      <StyledSpeachesContainer>
        <StyledSpeachesBlock>
          { leftSideSpeaches.map(item =>
            <StyledSpeacheItem key={item.id}>
              <a href={item.href} target={targetValue} rel={relValue}>{item.title}</a>
            </StyledSpeacheItem>
          )}
        </StyledSpeachesBlock>
        <StyledSpeachesBlock>
          { rightSideSpeaches.map(item =>
            <StyledSpeacheItem key={item.id}>
              <a href={item.href} target={targetValue} rel={relValue}>{item.title}</a>
            </StyledSpeacheItem>
          )}
        </StyledSpeachesBlock>
      </StyledSpeachesContainer>
    </div>
  </StyledSpeaches>

export default Speaches;
