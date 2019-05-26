import styled from "styled-components";

const StyledGoToTopButton = styled.a`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99; /* Make sure it does not overlap */
  border: none;
  outline: none;
  background-color: #7a7c84;
  color: #fff;
  cursor: pointer;
  opacity: 0.5;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (max-width: 650px) {
    display: none !important;
  }
`;

export default StyledGoToTopButton;