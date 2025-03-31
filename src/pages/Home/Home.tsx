import React from "react";
import styled from "styled-components";
import { HeroSection } from "./components/HeroSection";
import { PlatformSection } from "./components/PlatformSection";

const HomeContainer = styled.div`
  width: 100%;
  background: linear-gradient(120deg, #2563eb, #0ea5e9 50%, #0284c7);
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <PlatformSection />
    </HomeContainer>
  );
};
