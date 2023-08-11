import React from "react";
import { Link } from "./styled";

const ExternalLink = ({ children, link, className }) => {
  return (
    <Link className={className} href={link} target="_blank">
      {children}
    </Link>
  );
};

export { ExternalLink };
