import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          We are dedicated to creating exceptional web experiences using modern
          technologies and best practices. Our team is passionate about building
          scalable, maintainable, and user-friendly applications.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Technology Stack</SectionTitle>
        <Paragraph>
          We use a modern and robust technology stack that includes:
        </Paragraph>
        <ul>
          <li>React with TypeScript for type-safe development</li>
          <li>Styled-components for maintainable CSS-in-JS styling</li>
          <li>React Router for efficient navigation</li>
          <li>React Query for powerful data fetching and caching</li>
          <li>Error Boundary for graceful error handling</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <Paragraph>
          We're always interested in hearing about new projects and
          opportunities. Feel free to reach out to us at contact@example.com
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};
