import styled from "styled-components";

const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  min-height: 40vh;
  padding-bottom: 24px;
  font-weight: 100;
  font-size: 120%;
  line-height: 120%;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");

  @media (min-width: 960px) {
    min-height: 50vh;
    font-size: 160%;
    text-align: left;
  }
`;

export default StyledIntroduction;
