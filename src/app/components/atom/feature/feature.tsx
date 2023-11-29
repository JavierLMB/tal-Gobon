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

  console.log(inView, "Feature");
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
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
`;

const StyledFeatureTitle = styled.h2`
  line-height: 1.2;
  padding: 1rem 0.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  border-top: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledFeatureContent = styled.div`
  margin: auto 0;
  padding: 0rem 1.2rem;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.defaultFont};
`;
