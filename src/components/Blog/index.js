import React, { PureComponent } from "react";
import tatBackground from "./assets/tatBackground.jpg";

const backgroundStyle = {
    backgroundImage: `url(${tatBackground})`
};

class Blog extends PureComponent {
    render() {
        return (
            <div className="blog" style={backgroundStyle}>
                <h2>Blog</h2>
                <a href="https://talkingabouttesting.com" target="_blank" rel="noopener noreferrer">
                    <h3>Talking About Testing</h3>
                </a>
                <p>Criado para compartilhar conhecimento sobre meus aprendizados ao longo da carreira, com conteúdos para reflexão, mas também com muito conteúdo "mão na massa"</p>
            </div>
        );
    }
}

export default Blog;
