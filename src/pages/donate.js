import React from "react";
import { GlobalLayout } from "layout/globalLayout";
import { StripeContainer } from "containers/donation";

const DonatePage = () => {
  return (
    <GlobalLayout>
      <StripeContainer />
    </GlobalLayout>
  );
};

export default DonatePage;

export const Head = () => <title>Donate me</title>;
