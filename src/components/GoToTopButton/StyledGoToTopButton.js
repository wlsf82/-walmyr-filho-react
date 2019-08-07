import styled from "styled-components";

const StyledGoToTopButton = styled.a`
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99; /* Make sure it does not overlap */
  padding: 12px 12px 6px 12px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-size: 32px;
  opacity: 0.6;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0,0,0, 0.5);

  &:hover {
    color: #fff;
    opacity: 1;
  }
`;

export default StyledGoToTopButton;