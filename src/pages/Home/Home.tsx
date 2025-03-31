import React from "react";
import styled from "styled-components";
import { HeroSection } from "./components/HeroSection";
import { PlatformSection } from "./components/PlatformSection";

const HomeContainer = styled.div`
  width: 100%;
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <PlatformSection />
    </HomeContainer>
  );
};
