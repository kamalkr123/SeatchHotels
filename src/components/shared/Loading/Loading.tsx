import React from "react";
import { LoaderContainer, Spinner } from "./Loading.styles";

function Loading() {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}

export default Loading;
