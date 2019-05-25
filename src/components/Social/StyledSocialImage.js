import styled from "styled-components";

const StyledSocialImage = styled.img`
  padding-right: 10px;
  padding-top: 35px;
  width: 3.8%;
  &:hover {
    transform: scale(1.2);
  }
  @media only screen and (max-device-width: 650px) {
    padding-right: 8px;
    padding-top: 35px;
    width: 9%;
  }
`;

export default StyledSocialImage;
