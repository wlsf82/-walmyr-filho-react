import React, { PureComponent } from "react";

class Courses extends PureComponent {
    render() {
        return (
            <div className="courses">
                <h2>Cursos</h2>
                <div>
                    <h3>
                        <a href="https://www.youtube.com/playlist?list=PL-eblSNRj0QEvVfKp0Xzagao9SqaSyW5k" target="_blank" rel="noopener noreferrer">Aprendendo Protractor</a>
                    </h3>
                    <p>Curso gratúito no canal Talking About Testing, no Youtube, sobre testes automatizados com Protractor (do básico ao avançado)</p>
                </div>
                <div>
                    <h3>
                        <a href="https://github.com/wlsf82/protractor-and-webrtc" target="_blank" rel="noopener noreferrer">Protractor & WebRTC</a>
                    </h3>
                    <p>Codelab em minha conta no GitHub sobre como criar testes automatizados para aplicações WebRTC com o framework Protractor</p>
                </div>
                <div>
                    <h3>
                        <a href="http://code-squad.com/curso/Curso-Protractor-Automacao-de-testes-end-to-end-para-aplicacoes-Angular-JS/avulso" target="_blank" rel="noopener noreferrer">Protractor & AngularJS</a>
                    </h3>
                    <p>Curso na plataforma do Code Squad sobre automação de testes para aplicações AngularJS com o framework Protractor</p>
                </div>
            </div>
        );
    }
}

export default Courses;
