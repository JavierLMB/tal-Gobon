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
  width: 45%;
  padding: 1.5rem 0rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: opacity 0.8s ease 1s,
    transform 0.6s cubic-bezier(0.01, -0.02, 0.51, 1.6) 1s;

  background-color: ${({ theme }) => theme.colors.primaryLight};
  ${({ $inView }) => css`
    opacity: ${$inView ? "1" : "0"};
    transform: translateX(${$inView ? "0rem" : "-20rem"});
  `};
`;

const StyledFeatureTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledFeatureContent = styled.div`
  margin: auto 0;
  padding: 0rem 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.defaultFont};
`;
