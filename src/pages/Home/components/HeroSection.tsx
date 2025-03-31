import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  padding: 80px 120px;
  background-color: #001529;
  color: white;
`;

const MainHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #a0aec0;
  margin: 0;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background-color: #00b4d8;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0096c7;
  }
`;

const ImagePlaceholder = styled.div`
  width: 400px;
  height: 300px;
  background-color: #ff000033;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
`;

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <MainHero>
        <HeroContent>
          <Title>Elevating your security posture</Title>
          <Subtitle>
            Secure your code with our advanced security system and enhance your
            development workflow
          </Subtitle>
          <CTAButton>Get Started</CTAButton>
        </HeroContent>
        <ImagePlaceholder>Image Placeholder</ImagePlaceholder>
      </MainHero>
    </HeroContainer>
  );
};
