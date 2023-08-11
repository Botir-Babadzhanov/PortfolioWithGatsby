import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-family: "Inconsolata", monospace;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  background-color: #7b4ae2;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;
