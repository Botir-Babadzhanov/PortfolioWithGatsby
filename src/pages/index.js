import React from "react";
import { HomeContainer } from "containers/home";
import { GlobalLayout } from "layout/globalLayout";

const HomePage = () => {
  return (
    <GlobalLayout>
      <HomeContainer />
    </GlobalLayout>
  );
};

export default HomePage;

export const Head = () => <title>About me</title>;
