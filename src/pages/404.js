import React from "react";
import { URL } from "core/constants/urls";
import { ButtonLink } from "components";

const NotFoundPage = () => {
  return (
    <div>
      Sorry 😔, we couldn't find what you were looking for.
      <ButtonLink link={URL.HOME}>Go home</ButtonLink>.
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
