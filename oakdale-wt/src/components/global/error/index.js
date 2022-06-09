import React from "react";
import { ErrorContainer, ErrorBox, ErrorText } from "./ErrorElements";
export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorText>Error, that page does not exist!</ErrorText>
      </ErrorBox>
    </ErrorContainer>
  );
};
