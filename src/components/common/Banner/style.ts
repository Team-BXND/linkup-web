import { Body, Title } from "@/components/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

interface IBanner {
  background: string;
}

export const Banner = styled(Link)<IBanner>`
  position: relative;
  width: 100%;
  height: 11.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 2.5rem;
  background: ${(props) => props.background};
  white-space: pre-wrap;
  color: #fff;
  border-radius: 1rem;

  @media (max-width: 1440px) {
    height: 9rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    height: 8rem;
  }

  @media (max-width: 786px) {
    padding: 1rem;
    height: 6.5rem;
  }
`;

export const Imoji = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11.75rem;

  @media (max-width: 1440px) {
    width: 8rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BannerTitle = styled(Title)`
  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 786px) {
    font-size: 1rem;
  }
`;

export const BannerRedirect = styled(Body)`
  @media (max-width: 1440px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 786px) {
    font-size: 0.5rem;
  }
`;
