import styled from "styled-components";

const StyledBook = styled.div`
  padding-bottom: 30px;
  padding-top: 10px;
  @media (max-width: 650px) {
    border-bottom: 5px dotted #f2f2f2;
    padding: 12px;
  }
`;

const StyledBlogParagraph = styled.p`
  padding-bottom: 10px;
  padding-left: 200px;
  padding-right: 200px;
  @media (max-width: 650px) {
    padding-bottom: 0;
		padding-left: 0;
		padding-right: 0;
  }
  @media only screen and (max-device-width: 768px) {
    padding-left: 10px;
		padding-right: 10px;
  }
`;

const StyledBookImage = styled.img`
  padding-top: 30px;
  width: 30%;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 650px) {
    padding-top: 12px;
		width: 90%;
  }
`;

export { StyledBlogParagraph, StyledBookImage };

export default StyledBook;
