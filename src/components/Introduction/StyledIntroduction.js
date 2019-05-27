import styled from "styled-components";

const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  min-height: 30vh;
  padding-bottom: 20px;

  @media (max-width: 650px) {
    border-bottom: 5px dotted #f2f2f2;
  }
`;

export default StyledIntroduction;