import React from "react";
import { ButtonLink } from "components";
import { ArrowIcon } from "images/icons/arrowIcon";
import { Header, Title } from "./styled";

const HeaderComponent = ({ title, linkText, link, className }) => {
  return (
    <Header className={className}>
      <Title>{title}</Title>
      <ButtonLink link={link}>
        <ArrowIcon
          style={{ transform: "rotate(180deg)", marginRight: "20px" }}
        />
        {linkText}
      </ButtonLink>
    </Header>
  );
};

export { HeaderComponent };
