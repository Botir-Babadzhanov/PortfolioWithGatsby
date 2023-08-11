import React from "react";
import * as S from "./styled";

const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <S.Button className={className} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
};

export { Button };
