import styled from "styled-components";

export const Card = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;

  & > * {
    font-family: "Inconsolata", monospace;
  }
`;
export const Header = styled.div`
  gap: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Name = styled.h3`
  font-size: 32px;
  font-weight: 800;
`;

export const Count = styled.span`
  font-size: 32px;
  font-weight: 800;
`;

export const DonateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
`;
