import React, { PureComponent } from "react";

const leftSideSpeaches = [
    {
        href: "http://talkingabouttesting.com/tag/n-ways-to-test/",
        title: "N ways to test 2015",
    },
    {
        href: "http://guts-rs.blogspot.com.br/2015/08/saiba-o-que-rolou-no-evento-de.html",
        title: "GUTS-RS Agosto de 2015",
    },
    {
        href: "http://www.thedevelopersconference.com.br/tdc/2015/florianopolis/trilha-testes",
        title: "TDC Floripa 2015",
    },
    {
        href: "http://pt.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-trends-floripa",
        title: "Agile Trends Floripa 2015",
    },
    {
        href: "http://pt.slideshare.net/walmyrlimasilvafilho/protractor-visual-review-2",
        title: "TDC Porto Alegre 2015",
    },
];

const rightSideSpeaches = [
    {
        href: "http://www.slideshare.net/walmyrlimasilvafilho/primeiros-passos-com-protractor-gutssc",
        title: "GUTS-SC Janeiro 2016",
    },
    {
        href: "http://www.slideshare.net/walmyrlimasilvafilho/protractor-style-guide-agile-testers-conference-2016",
        title: "Conferência Agile Testers 2016",
    },
    {
        href: "https://goo.gl/11VEhl",
        title: "TDC Floripa 2016",
    },
    {
        href: "https://www.slideshare.net/walmyrlimasilvafilho/agile-testing-coach-agile-lean-ireland-2017",
        title: "Agile Lean Ireland 2017",
    },
    {
        href: "https://www.slideshare.net/walmyrlimasilvafilho/estrategias-para-o-uso-de-integracao-e-entrega-continua-com-gocd",
        title: "Conferência Agile Testers 2017",
    },
];

class Speaches extends PureComponent {
    render() {
        return (
            <div className="speaches">
                <h2>Palestras e eventos</h2>
                <div className="left">
                { leftSideSpeaches.map(item =>
                    <h3>
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </h3>
                )}

                </div>
                <div className="right">
                { rightSideSpeaches.map(item =>
                    <h3>
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </h3>
                )}
                </div>
            </div>
        );
    }
}

export default Speaches;
