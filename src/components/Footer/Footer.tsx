import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
  padding: 16px;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  color: white;
  font-size: 14px;
  opacity: 0.8;
  font-family: inherit;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const LegalLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    opacity: 1;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </SocialLink>
          <SocialLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © {new Date().getFullYear()} Kikimora. All rights reserved.
        </Copyright>

        <LegalLinks>
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          <LegalLink to="/terms">Terms & Conditions</LegalLink>
        </LegalLinks>
      </FooterContent>
    </FooterContainer>
  );
};
