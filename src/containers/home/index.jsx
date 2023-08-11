import React from "react";
import { URL } from "core/constants/urls";
import Person from "images/avatar.png";
import {
  ArrowIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
} from "images/icons/index";
import {
  ButtonGroup,
  ContanctItem,
  ContanctList,
  Describtion,
  DonateList,
  Image,
  ImageWrapper,
  Item,
  Main,
  StyledButtonLink,
  StyledDonateCard,
  StyledExternalLink,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";

const HomeContainer = () => {
  return (
    <Wrapper>
      <Main>
        <ImageWrapper>
          <Image src={Person} />
        </ImageWrapper>
        <Title>Botir Babadzhanov</Title>
        <ContanctList>
          <ContanctItem>
            <StyledExternalLink link="https://www.instagram.com/botir.02/">
              <InstagramIcon />
            </StyledExternalLink>
          </ContanctItem>
          <ContanctItem>
            <StyledExternalLink link="https://www.instagram.com/botir.02/">
              <GitlabIcon />
            </StyledExternalLink>
          </ContanctItem>
          <ContanctItem>
            <StyledExternalLink link="https://www.linkedin.com/in/bbabadzhanov/">
              <LinkedinIcon />
            </StyledExternalLink>
          </ContanctItem>
        </ContanctList>
      </Main>
      <Item>
        <SubTitle>About me</SubTitle>
        <Describtion>
          I am an experienced software engineer with 3+ years of professional
          experience with the web platform, highly skilled in JavaScript, and
          its frameworks. I can turn your idea into reality using the most
          advanced web technologies in the development industry. Programming is
          my lifestyle; I breathe it for many years and continuously improve my
          professional skills.
        </Describtion>
      </Item>
      <ButtonGroup>
        <StyledButtonLink link={URL.PORTFOLIO}>
          Portfolio <ArrowIcon />
        </StyledButtonLink>
        <StyledButtonLink link={URL.DONATE}>
          Donate me <ArrowIcon />
        </StyledButtonLink>
      </ButtonGroup>
    </Wrapper>
  );
};

export { HomeContainer };
