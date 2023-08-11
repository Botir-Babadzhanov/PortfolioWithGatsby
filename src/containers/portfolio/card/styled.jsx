import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const CardText = styled.div`
  font-family: "Inconsolata", monospace;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  padding: 10px;
  text-align: center;
  background: rgba(123, 74, 226, 0.2);
  border-radius: 16px;
  text-align: justify;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  background: rgba(123, 74, 226, 0.2);
`;
export const CardImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;
