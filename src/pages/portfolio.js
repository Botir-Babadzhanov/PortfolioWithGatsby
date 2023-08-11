import React from "react";
import { PortfolioContainer } from "containers/portfolio";
import { GlobalLayout } from "layout/globalLayout";

const PortfolioPage = () => {
  return (
    <GlobalLayout>
      <PortfolioContainer />
    </GlobalLayout>
  );
};

export default PortfolioPage;

export const Head = () => <title>My Portfolio</title>;
