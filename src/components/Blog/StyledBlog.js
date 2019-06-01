import styled from "styled-components";
import tatBackground from "./assets/tatBackground.jpg";

////////////////////////////////////////////////////////////////////////////////
// StyledBlog
////////////////////////////////////////////////////////////////////////////////
const StyledBlog = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 70vh;
  padding: 48px 0;
  color: #fff;

  :before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center top;
    background-size: cover;
    background-image: url(${tatBackground});
    background-color: rgba(240, 165, 0, 0.4);
    background-blend-mode: luminosity;
    opacity: 0.8;
    z-index: 0;
  }
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogWrapper
////////////////////////////////////////////////////////////////////////////////
const StyledBlogWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogH2
////////////////////////////////////////////////////////////////////////////////
const StyledBlogH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  text-shadow: 1px 1px 0 rgba(0,0,0, 1);
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogH3
////////////////////////////////////////////////////////////////////////////////
const StyledBlogH3 = styled.h3`
  margin-top: 0;
  margin-bottom: 24px;
  text-shadow: 1px 1px 0 rgba(0,0,0, 1);
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogParagraph
////////////////////////////////////////////////////////////////////////////////
const StyledBlogParagraph = styled.p`
  margin-bottom: 36px;
  text-shadow: 1px 1px 0 rgba(0,0,0, 1);
`;

////////////////////////////////////////////////////////////////////////////////
// StyledBlogAnchor
////////////////////////////////////////////////////////////////////////////////
const StyledBlogAnchor = styled.a`
  display: inline-block;
  padding: 12px 48px;
  border: 1px solid #fff;
  color: #000;
  font-weight: bold;
  line-height: 120%;
  text-align: center;
  text-shadow: 1px 1px 0 rgba(255,255,255, 1);
  background-color: rgba(255,255,255, 0.7);
  box-shadow: 1px 1px 3px rgba(0,0,0, 0.8);
  transition: background 0.3s ease;

  :hover {
    color: #fff;
    text-shadow: none;
    background-color: rgba(240, 165, 0, 0.7);
    box-shadow: 1px 1px 3px rgba(0,0,0, 0);
  }
`;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
export {
  StyledBlogWrapper,
  StyledBlogH2,
  StyledBlogH3,
  StyledBlogParagraph,
  StyledBlogAnchor
};

export default StyledBlog;