import styled, { css } from "styled-components";
import { useInView } from "react-hook-inview";
import { ReactNode } from "react";

type FeatureProps = {
  title: string;
  content: string;
  children: ReactNode;
};

export default function Feature({ title, content, children }: FeatureProps) {
  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
    rootMargin: "-20% 10%",
  });

  return (
    <StyledFeatureContainer ref={ref} $inView={inView}>
      {children}
      <StyledFeatureTitle>{title}</StyledFeatureTitle>
      <StyledFeatureContent>{content}</StyledFeatureContent>
    </StyledFeatureContainer>
  );
}

const StyledFeatureContainer = styled.div<{ $inView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 0rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  transition: opacity 0.8s ease,
    transform 0.6s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $inView }) => css`
    opacity: ${$inView ? "1" : "0"};
    transform: translateX(${$inView ? "0rem" : "-20rem"});
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    padding: 3rem 0rem;
    border-radius: 1rem;
  }
`;

const StyledFeatureTitle = styled.h2`
  line-height: 1.2;
  padding: 1rem 0.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  border-top: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    padding: 2rem 4.5rem;
  }
`;

const StyledFeatureContent = styled.div`
  margin: auto 0;
  padding: 0rem 2.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.defaultFont};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpLargest}) {
    padding: 1rem 5rem;
  }
`;
