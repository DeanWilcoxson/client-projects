import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ParentContainer,
  ParentBox,
  ParentTitle,
  ParentBody,
  ParentDescription,
  ParentForm,
  ParentFormInput,
  ParentQuestion,
  ParentSubmitButton,
  ParentQuestionBox,
  ParentCommentBox,
  QuestionBox,
} from "./elements";
export const Parent = ({ data }) => {
  const questionId = uuidv4();
  return (
    <ParentContainer id={data.id}>
      <ParentBox>
        <ParentTitle>{data.compname}</ParentTitle>
        <ParentBody>
          <ParentDescription>{data.intro}</ParentDescription>
          <ParentForm>
            <ParentQuestionBox>
              <QuestionBox id={questionId}>
                <ParentQuestion>{data.question1}</ParentQuestion>
                <ParentFormInput></ParentFormInput>
              </QuestionBox>
              <QuestionBox id={questionId}>
                <ParentQuestion>{data.question2}</ParentQuestion>
                <ParentFormInput></ParentFormInput>
              </QuestionBox>
              <QuestionBox id={questionId}>
                <ParentQuestion>{data.question3}</ParentQuestion>
                <ParentFormInput></ParentFormInput>
              </QuestionBox>
              <QuestionBox id={questionId}>
                <ParentQuestion>{data.question4}</ParentQuestion>
                <ParentFormInput></ParentFormInput>
              </QuestionBox>
              <QuestionBox id={questionId}>
                <ParentQuestion>{data.question5}</ParentQuestion>
                <ParentFormInput></ParentFormInput>
              </QuestionBox>
              <QuestionBox>
                <ParentQuestion>{data.comments}</ParentQuestion>
                <ParentCommentBox></ParentCommentBox>
              </QuestionBox>
            </ParentQuestionBox>
            <ParentSubmitButton>Submit</ParentSubmitButton>
          </ParentForm>
        </ParentBody>
      </ParentBox>
    </ParentContainer>
  );
};
