import React from "react";
import styled from "styled-components";

const PlatformContainer = styled.section`
  padding: 80px 120px;
  color: white;
  display: flex;
  gap: 48px;
  justify-content: flex-start;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 19, 35, 0.3);
    pointer-events: none;
  }
`;

const ContentSection = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 18px;
  color: #a0aec0;
  margin: 0;
  line-height: 1.6;
  max-width: 500px;
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

const ChartPlaceholder = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ff000033;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
  position: relative;
  z-index: 1;
`;

export const PlatformSection: React.FC = () => {
  return (
    <PlatformContainer>
      <ChartPlaceholder>Chart Placeholder</ChartPlaceholder>
      <ContentSection>
        <Title>The platform for efficient teams</Title>
        <Description>
          Our platform streamlines security workflows, enabling teams to
          identify and address vulnerabilities faster while maintaining robust
          compliance standards.
        </Description>
        <CTAButton>Learn More</CTAButton>
      </ContentSection>
    </PlatformContainer>
  );
};
