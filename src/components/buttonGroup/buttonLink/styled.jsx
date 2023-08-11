import { Link } from "gatsby";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  cursor: pointer;
  font-family: "Inconsolata", monospace;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background-color: #7b4ae2;
`;
