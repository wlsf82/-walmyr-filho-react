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

  img {width: 100%;}

  a {
    color: #2c313f;
    text-decoration: none;
  }

  a:hover {
    color: #efa700;
  }

  h1, h2, h3, h4, h5, h5 { line-height: 120%;}

  h2 {font-size: 250%;}
  h3 {font-size: 175%;}
  h4 {font-size: 150%;}
  h5 {font-size: 125%;}

  .wrapper {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
  }

  @media (min-width: 960px) {
    .wrapper {
      padding: 0 48px;
    }
  }
`;

const StyledApp = styled.main`
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
`;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
export default StyledApp;