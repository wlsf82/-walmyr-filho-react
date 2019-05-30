import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  *,
  *:before,
  *:after {
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: #2c313f;
    text-decoration: none;
  }

  a:hover {
    color: #efa700;
  }

  h1, h2, h3 {
    text-transform: uppercase;
  }

  .wrapper {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }

`;

const StyledApp = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  text-align: center;
`;

export default StyledApp;