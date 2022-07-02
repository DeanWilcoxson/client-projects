import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const ParentBox = styled.div`
  padding: 1rem;
`;
export const ParentTitle = styled.h1`
  text-align: center;
  font-style: italic;
  font-family: "50 blizzards";
  color: #253545b2;
  text-decoration: underline;
`;
export const ParentBody = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: justify;
  }
`;
export const ParentDescription = styled.p`
  width: 30%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-size: 2.75vh;
  background-color: #d3d3d379;
  padding: 2rem;
  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;
export const ParentForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    padding: 0.5em;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ParentFormInput = styled.input`
  background-color: #25252525;
  border: solid 1px grey;
  border-radius: 5px;
`;
export const ParentQuestionBox = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 90%;
    margin: 0.25rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const QuestionBox = styled.div`
  padding: 5px;
  text-align: center;
`;
export const ParentQuestion = styled.p`
  color: #253545b2;
  font-weight: bolder;
  @media screen and (max-width: 769px) {
    font-size: 2.5vh;
  }
`;
export const ParentCommentBox = styled.textarea`
  width: 100%;
  font-size: 2.15vh;
  background-color: #25252525;
  border-radius: 5px;
  border: solid 1px grey;
  @media screen and (max-width: 769px) {
    font-size: 3.5vh;
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;
export const ParentSubmitButton = styled.button`
  padding: 0.5rem;
  text-align: center;
  &:hover {
    padding: 0.56rem;
    color: white;
    background-color: green;
    border-radius: 2.5px;
    border: 1px solid grey;
  }
`;
