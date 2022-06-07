import React from "react";
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
  ParentGalleryButton,
} from "./elements";
export const Parent = () => {
  return (
    <ParentContainer>
      <ParentBox>
        <ParentTitle></ParentTitle>
        <ParentGalleryButton></ParentGalleryButton>
        <ParentBody>
          <ParentDescription></ParentDescription>
          <ParentForm>
            <ParentQuestionBox>
              <ParentQuestion></ParentQuestion>
              <ParentFormInput></ParentFormInput>
              <ParentQuestion></ParentQuestion>
              <ParentFormInput></ParentFormInput>
              <ParentQuestion></ParentQuestion>
              <ParentFormInput></ParentFormInput>
              <ParentQuestion></ParentQuestion>
              <ParentFormInput></ParentFormInput>
              <ParentQuestion></ParentQuestion>
              <ParentFormInput></ParentFormInput>
            </ParentQuestionBox>
            <ParentSubmitButton></ParentSubmitButton>
          </ParentForm>
        </ParentBody>
      </ParentBox>
    </ParentContainer>
  );
};
