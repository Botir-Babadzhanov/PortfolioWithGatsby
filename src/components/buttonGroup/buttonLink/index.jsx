import React from "react";
import { LinkButton } from "./styled";

const ButtonLink = ({ children, link, className }) => {
  return (
    <LinkButton className={className} to={link}>
      {children}
    </LinkButton>
  );
};

export { ButtonLink };
