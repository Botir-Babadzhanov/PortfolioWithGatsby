import React from "react";
import { Card, CardText, CardImage, CardImageContainer } from "./styled";

const PortfolioCard = ({ img, title }) => {
  return (
    <Card>
      <CardImageContainer>
        <CardImage src={img} />
      </CardImageContainer>
      <CardText>{title}</CardText>
    </Card>
  );
};

export { PortfolioCard };
