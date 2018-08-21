import styled from "styled-components";

import tatBackground from "./assets/tatBackground.jpg";

const StyledBlog = styled.div`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-image: url(${tatBackground});
  background-size: cover;
  color: #fff;
  opacity: .9;
  padding-top: 30px;
  @media only screen and (max-device-width: 650px) {
    background-size: 0;
    border-bottom: 5px dotted #f2f2f2;
    padding-top: 10px;
  }
`;

const StyledBlogH2 = styled.h2`
  @media only screen and (max-device-width: 650px) {
    color: #7a7c84;
  }
`;

const StyledBlogParagraph = styled.p`
  margin-bottom: 0;
  margin-left: 15%;
  margin-right: 15%;
  padding-bottom: 40px;
  padding-left: 200px;
  padding-right: 200px;
  @media only screen and (max-device-width: 650px) {
    color: #7a7c84;
		margin-left: 0;
		margin-right: 0%;
		padding: 12px;
  }
  @media only screen and (max-device-width: 768px) {
    padding-left: 0;
		padding-right: 0;
  }
`;

const StyledBlogAnchor = styled.a`
  color: #efa700;
  &:hover {
    color: #f2f2f2;
  }
  @media only screen and (max-device-width: 650px) {
    color: #2c313f;
    &:hover {
      color: #efa700;
    }
  }
`;

export { StyledBlogH2, StyledBlogParagraph, StyledBlogAnchor };

export default StyledBlog;
