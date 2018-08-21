import React from "react";

import StyledBuyBookButton, { StyledBlogH2, StyledBlogParagraph, StyledBlogAnchor } from "./StyledBlog";

const Blog = () =>
  <StyledBuyBookButton>
    <StyledBlogH2>Blog</StyledBlogH2>
    <StyledBlogAnchor href="https://talkingabouttesting.com" target="_blank" rel="noopener noreferrer">
      <h3>Talking About Testing</h3>
    </StyledBlogAnchor>
    <StyledBlogParagraph>Criado para compartilhar conhecimento sobre meus aprendizados ao longo da carreira, com conteúdos para reflexão, mas também com muito conteúdo "mão na massa"</StyledBlogParagraph>
  </StyledBuyBookButton>

export default Blog;
