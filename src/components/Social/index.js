import React, { PureComponent } from "react";
import facebookImg from "./assets/facebook.png";
import githubImg from "./assets/github.png";
import googleplusImg from "./assets/googleplus.png";
import linkedinImg from "./assets/linkedin.png";
import twiterImg from "./assets/twiter.png";
import wordpressImg from "./assets/wordpress.png";
import youtubeImg from "./assets/youtube.png";

const socialData = [
    {
        alt: "Facebook",
        img: facebookImg,
        href: "https://www.facebook.com/walmyr.limasilvafilho",
    },
    {
        alt: "GitHub",
        img: githubImg,
        href: "https://github.com/wlsf82",
    },
    {
        alt: "Google Plus",
        img: googleplusImg,
        href: "https://plus.google.com/114754442377170940541",
    },
    {
        alt: "LinkedIn",
        img: linkedinImg,
        href: "https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a",
    },
    {
        alt: "Twiter",
        img: twiterImg,
        href: "https://twitter.com/walmyrlimaesilv",
    },
    {
        alt: "Wordpress",
        img: wordpressImg,
        href: "https://talkingabouttesting.com/",
    },
    {
        alt: "YouTube",
        img: youtubeImg,
        href: "https://www.youtube.com/talkingabouttesting",
    },
];

class Social extends PureComponent {
    render() {
        return (
            <div className="social">
            { socialData.map( item =>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.alt}/>
                </a>
            )}
            </div>
        );
    }
}

export default Social;
