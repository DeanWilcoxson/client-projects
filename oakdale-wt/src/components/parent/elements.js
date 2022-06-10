import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ParentDescription = styled.p`
  width: 50%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  font-size: 2.5vh;
`;
export const ParentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ParentFormInput = styled.input`
  background-color: #25252525;
  border: solid 1px grey;
  border-radius: 5px;
`;
export const ParentQuestionBox = styled.div`
  margin: 1.25rem;
  border: 1px solid grey;
  border-radius: 5px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const QuestionBox = styled.div`
  padding: 5px;
`;
export const ParentQuestion = styled.p`
  color: #253545b2;
  font-weight: bolder;
`;
export const ParentCommentBox = styled.textarea`
  background-color: #25252525;
  border-radius: 5px;
`;
export const ParentSubmitButton = styled.button`
  padding: 5px;
  &:hover {
    color: white;
    background-color: green;
    border-radius: 2.5px;
    border: 1px solid grey;
  }
`;
