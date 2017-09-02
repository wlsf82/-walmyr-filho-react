import React, { PureComponent } from "react";
import tatLogo from "./assets/tat.png";

class Blog extends PureComponent {
    render() {
        return (
            <div className="blog">
                <h2>Blog</h2>
                <a href="https://talkingabouttesting.com" target="_blank" rel="noopener noreferrer">
                    <img src={tatLogo} alt="Talking About Testing"/>
                </a>
                <p>Criado para compartilhar conhecimento sobre meus aprendizados ao longo da carreira, com conteúdos para reflexão, mas também com muito conteúdo "mão na massa"</p>
            </div>
        );
    }
}

export default Blog;
