import { ButtonLink, ExternalLink } from "components";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  gap: 40px;
  display: flex;
  flex-flow: column nowrap;
`;

export const Main = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  &.right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 40%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-family: "Inconsolata", monospace;
  position: relative;
  font-size: 46px;
  font-weight: 800;
  line-height: 1;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background: rgba(123, 74, 226, 0.2);
`;

export const SubTitle = styled.h2`
  font-family: "Inconsolata", monospace;
  position: relative;
  font-size: 36px;
  line-height: 1;
`;

export const Item = styled.div``;

export const Describtion = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  margin-top: 20px;
`;

export const ContanctList = styled.ul`
  gap: 15px;
  display: flex;
  justify-content: center;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const ContanctItem = styled.li`
  cursor: pointer;
`;

export const StyledExternalLink = styled(ExternalLink)`
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding-bottom: 80px;
`;

export const StyledButtonLink = styled(ButtonLink)`
  width: 100%;
`;
