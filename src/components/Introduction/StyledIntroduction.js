import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// StyledIntroduction
////////////////////////////////////////////////////////////////////////////////
const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  min-height: 40vh;
  padding-bottom: 24px;
  font-weight: 100;
  font-size: 120%;
  line-height: 120%;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1327' height='1327' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='26.1' stroke-opacity='0.12'%3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");

@media (min-width: 960px) {
  min-height: 60vh;
  font-size: 180%;
  text-align: left;
}
`;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
export default StyledIntroduction;