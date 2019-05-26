import styled from "styled-components";

const StyledBuyBookButton = styled.a`
  background-color: #2c313f;
  border-radius: 65px;
  border-style: none;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  height: 37.4688px;
  letter-spacing: 0.8125px;
  padding: 5px 19.5px 0 19.5px;
  text-transform: uppercase;
  display: table;
  margin: auto;
  &:hover {
    background-color: #efa700;
    color: #fff;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export default StyledBuyBookButton;
