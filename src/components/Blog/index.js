import React from "react";
import { ReactComponent as Logo } from './assets/tat-logo-white-color-256.svg';

import StyledBlog, {
  StyledBlogWrapper,
  StyledBlogH2,
  StyledBlogH3,
  StyledBlogParagraph,
  StyledBlogAnchor
} from "./StyledBlog";



const Blog = () =>
  <StyledBlog>
    <div className="wrapper">
      <StyledBlogWrapper>
        <StyledBlogH2>Blog</StyledBlogH2>
        <Logo />
        <StyledBlogH3>Talking About Testing</StyledBlogH3>
        <StyledBlogParagraph>Criado para compartilhar conhecimento sobre meus aprendizados ao longo da carreira, com conteúdos para reflexão, mas também com muito conteúdo "mão na massa"</StyledBlogParagraph>
        <StyledBlogAnchor
            href="https://talkingabouttesting.com"
            target="_blank"
            rel="noopener noreferrer"
          >Leia mais</StyledBlogAnchor>
      </StyledBlogWrapper>
    </div>
  </StyledBlog>

export default Blog;