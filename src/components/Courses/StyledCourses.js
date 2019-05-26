import styled from "styled-components";

const StyledCourses = styled.div`
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 650px) {
    background-color: #fff;
    border-bottom: 5px dotted #f2f2f2;
  }
`;

const StyledCoursesH2 = styled.h2`
  margin-top: 0;
  padding-top: 25px;
`;

const StyledCoursesContainer = styled.div` //.courses
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  @media (max-width: 650px) {
    background-color: #fff;
    display: block;
    margin-bottom: -10px;
  }
`;

const StyledCoursesDivInsideContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  vertical-align: text-top;
  width: calc(90% / 3);
  padding-bottom: 20px;
  margin-bottom: 20px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    display:table-row;
    padding: 12px;
    width: 90%;
  }
`;

const StyledCoursesParagraph = styled.p`
  margin: 0 10px;
  padding: 0 10px;
  @media (max-width: 650px) {
    padding-bottom: 20px;
    &:last-child {
      padding-bottom: 20px;
    }
  }
`;

export { StyledCoursesH2, StyledCoursesContainer, StyledCoursesDivInsideContainer, StyledCoursesParagraph };

export default StyledCourses;