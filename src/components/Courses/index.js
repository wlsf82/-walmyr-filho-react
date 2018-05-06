import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const courses = [
    {
        id: uuid(),
        href: "http://talkingabouttesting.coursify.me/courses/introducao-aos-testes-automatizados",
        title: "Testes automatizados",
        p: "Curso gratúito teórico no Coursify.me sobre automação de testes em diversas camadas de aplicações",
    },
    {
        id: uuid(),
        href: "http://talkingabouttesting.coursify.me/courses/arquitetura-de-testes-com-protractor",
        title: "Protractor",
        p: "Curso prático no Coursify.me sobre arquitetura de testes end-to-end com Protractor",
    },
    {
        id: uuid(),
        href: "http://talkingabouttesting.coursify.me/courses/testes-de-regressao-visual-com-backstopjs",
        title: "BackstopJS",
        p: "Curso prático no Coursify.me sobre testes de regressão visual com a ferramenta BackstopJS",
    },
];

class Courses extends PureComponent {
    render() {
        return (
            <div className="courses">
                <h2>Cursos</h2>
                { courses.map(item =>
                <div key={item.id}>
                    <h3>
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </h3>
                    <p>{item.p}</p>
                </div>
                )}
            </div>
        );
    }
}

export default Courses;
