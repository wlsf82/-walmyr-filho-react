import styled from "styled-components";

const StyledSocial = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 0;
  background-color: #2c313f;
`;

const StyledSocialItem = styled.li`
  flex-basis: 72px;
  margin: 6px 12px;
  list-style: none;
`;

const StyledSocialLink = styled.a`
  display: block;
  transition: 0.1s ease all;

  :hover {
    transform: scale(1.2);
  }
`;

export {
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialImage
};

export default StyledSocial;