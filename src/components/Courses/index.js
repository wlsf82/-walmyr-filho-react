import React, { PureComponent } from "react";
import uuid from "uuid/v4";

const courses = [
    {
        id: uuid(),
        href: "https://www.youtube.com/playlist?list=PL-eblSNRj0QEvVfKp0Xzagao9SqaSyW5k",
        title: "Aprendendo Protractor",
        p: "Curso gratúito no canal Talking About Testing, no Youtube, sobre testes automatizados com Protractor (do básico ao avançado)",
    },
    {
        id: uuid(),
        href: "https://github.com/wlsf82/protractor-and-webrtc",
        title: "Protractor & WebRTC",
        p: "Codelab no GitHub sobre como criar testes automatizados para aplicações WebRTC com o framework Protractor",
    },
    {
        id: uuid(),
        href: "http://code-squad.com/curso/Curso-Protractor-Automacao-de-testes-end-to-end-para-aplicacoes-Angular-JS/avulso",
        title: "Protractor & AngularJS",
        p: "Code Squad - curso sobre automação de testes para aplicações AngularJS com o framework Protractor",
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
