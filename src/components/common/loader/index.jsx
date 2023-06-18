import React from "react";
import { LoaderContainer, LoaderSpinner } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderContainer data-testid="loader">
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
