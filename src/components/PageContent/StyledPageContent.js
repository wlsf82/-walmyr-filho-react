import styled from "styled-components";

const StyledPageContent = styled.div`
  line-height: 150%;
  padding-top: 75px; /* Header height for mobile */

  @media (min-width: 960px) {
    padding-top: 100px; /* Header height for desktop */
  }
`;

export default StyledPageContent;