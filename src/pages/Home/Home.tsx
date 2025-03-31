import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";

const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Your React App</Title>
        <Subtitle>
          A modern React application built with TypeScript and styled-components
        </Subtitle>
        <ButtonGroup>
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button variant="outline" size="large">
            Learn More
          </Button>
        </ButtonGroup>
      </Hero>
    </HomeContainer>
  );
};
