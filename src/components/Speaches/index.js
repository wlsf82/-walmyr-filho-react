import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const leftSideSpeaches = [
    {
        id: uuid(),
        href: "http://talkingabouttesting.com/tag/n-ways-to-test/",
        title: "N ways to test 2015",
    },
    {
        id: uuid(),
        href: "http://guts-rs.blogspot.com.br/2015/08/saiba-o-que-rolou-no-evento-de.html",
        title: "GUTS-RS Agosto de 2015",
    },
    {
        id: uuid(),
        href: "http://www.thedevelopersconference.com.br/tdc/2015/florianopolis/trilha-testes",
        title: "TDC Floripa 2015",
    },
    {
        id: uuid(),
        href: "http://pt.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-trends-floripa",
        title: "Agile Trends Floripa 2015",
    },
    {
        id: uuid(),
        href: "http://pt.slideshare.net/walmyrlimasilvafilho/protractor-visual-review-2",
        title: "TDC Porto Alegre 2015",
    },
    {
        id: uuid(),
        href: "http://www.slideshare.net/walmyrlimasilvafilho/primeiros-passos-com-protractor-gutssc",
        title: "GUTS-SC Janeiro 2016",
    },
];

const rightSideSpeaches = [
    {
        id: uuid(),
        href: "http://www.slideshare.net/walmyrlimasilvafilho/protractor-style-guide-agile-testers-conference-2016",
        title: "Conferência Agile Testers 2016",
    },
    {
        id: uuid(),
        href: "https://goo.gl/11VEhl",
        title: "TDC Floripa 2016",
    },
    {
        id: uuid(),
        href: "https://www.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-lean-ireland-2017",
        title: "Agile Lean Ireland 2017",
    },
    {
        id: uuid(),
        href: "https://www.slideshare.net/walmyrlimasilvafilho/estrategias-para-o-uso-de-integracao-e-entrega-continua-com-gocd",
        title: "Conferência Agile Testers 2017",
    },
    {
        id: uuid(),
        href: "https://www.slideshare.net/walmyrlimasilvafilho/lessons-learned-as-a-software-engineer-working-at-appearin",
        title: "Agile Tour Kaunas 2017",
    },
    {
        id: uuid(),
        href: "https://www.slideshare.net/walmyrlimasilvafilho/lessons-learned-as-a-software-engineer-working-at-appearin",
        title: "Agile Tour Vilnius 2017",
    },
];

const relValue = "noopener noreferrer";
const targetValue = "_blank";

class Speaches extends PureComponent {
    render() {
        return (
            <div className="speaches">
                <h2>Palestras e eventos</h2>
                <div className="left">
                { leftSideSpeaches.map(item =>
                    <h3 key={item.id}>
                        <a href={item.href} target={targetValue} rel={relValue}>{item.title}</a>
                    </h3>
                )}
                </div>
                <div className="right">
                { rightSideSpeaches.map(item =>
                    <h3 key={item.id}>
                        <a href={item.href} target={targetValue} rel={relValue}>{item.title}</a>
                    </h3>
                )}
                </div>
            </div>
        );
    }
}

export default Speaches;
