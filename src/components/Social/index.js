import React, { PureComponent } from "react";
import facebookIcon from "./assets/facebook.png";
import githubIcon from "./assets/github.png";
import googleplusIcon from "./assets/googleplus.png";
import linkedinIcon from "./assets/linkedin.png";
import twiterIcon from "./assets/twiter.png";
import wordpressIcon from "./assets/wordpress.png";
import youtubeIcon from "./assets/youtube.png";

class Social extends PureComponent {
    render() {
        return (
            <div className="social">
                <a href="https://www.facebook.com/walmyr.limasilvafilho" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook"/>
                </a>
                <a href="https://github.com/wlsf82" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub"/>
                </a>
                <a href="https://plus.google.com/114754442377170940541" target="_blank" rel="noopener noreferrer">
                    <img src={googleplusIcon} alt="Google Plus"/>
                </a>
                <a href="https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn"/>
                </a>
                <a href="https://twitter.com/walmyrlimaesilv" target="_blank" rel="noopener noreferrer">
                    <img src={twiterIcon} alt="Twiter"/>
                </a>
                <a href="https://talkingabouttesting.com/" target="_blank" rel="noopener noreferrer">
                    <img src={wordpressIcon} alt="Wordpress"/>
                </a>
                <a href="https://www.youtube.com/talkingabouttesting" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="Youtube"/>
                </a>
            </div>
        );
    }
}

export default Social;
