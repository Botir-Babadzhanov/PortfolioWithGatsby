import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 16px;
  margin: 80px 0;
  width: 100%;
  height: 100vh;
  gap: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-items: baseline;
`;

export const List = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 20px;
`;
