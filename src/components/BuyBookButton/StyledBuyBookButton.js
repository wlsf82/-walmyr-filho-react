import styled from "styled-components";

const StyledBuyBookButton = styled.a`
  display: inline-block;
  padding: 12px 48px;
  margin: 24px 0;
  color: #fff;
  font-weight: bold;
  line-height: 120%;
  letter-spacing: 0.8125px;
  text-align: center;
  background-color: rgba(45, 50, 65, 0.9);
  box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
  transition: background 0.3s ease;
  &:hover {
    color: #fff;
    text-shadow: none;
    background-color: rgba(240, 165, 0, 0.7);
    box-shadow: 1px 1px 3px rgba(0,0,0, 0);
`;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
export default StyledBuyBookButton;