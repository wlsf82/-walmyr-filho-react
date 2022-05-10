import React from "react";
import uuid from "uuid/v4";

import githubImg from "./assets/github.png";
import gitlabImg from "./assets/gitlab.png";
import linkedinImg from "./assets/linkedin.png";
import twitterImg from "./assets/twitter.png";
import wordpressImg from "./assets/wordpress.png";
import youtubeImg from "./assets/youtube.png";

import StyledSocial, {
  StyledSocialItem,
  StyledSocialLink
} from "./StyledSocial";

const socialData = [
  {
    id: uuid(),
    alt: "GitHub",
    img: githubImg,
    href: "https://github.com/wlsf82",
  },
  {
    id: uuid(),
    alt: "LinkedIn",
    img: linkedinImg,
    href: "https://www.linkedin.com/in/walmyr-lima-e-silva-filho",
  },
  {
    id: uuid(),
    alt: "Twitter",
    img: twitterImg,
    href: "https://twitter.com/walmyrlimaesilv",
  },
  {
    id: uuid(),
    alt: "Wordpress",
    img: wordpressImg,
    href: "https://talkingabouttesting.com/",
  },
  {
    id: uuid(),
    alt: "YouTube",
    img: youtubeImg,
    href: "https://www.youtube.com/c/TalkingAboutTesting",
  },
];

const Social = () =>
  <StyledSocial>
    { socialData.map(item =>
      <StyledSocialItem key={item.id}>
        <StyledSocialLink href={item.href} target="_blank" rel="noopener noreferrer" key={item.id}>
          <img src={item.img} alt={item.alt} />
        </StyledSocialLink>
      </StyledSocialItem>
    )}
  </StyledSocial>

export default Social;
