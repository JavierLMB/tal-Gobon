import { useState, ReactNode } from "react";
import styled, { css } from "styled-components";
import ExpanderButton from "../../atom/expander-button/expanderButton";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

type ExpanderProps = {
  children: ReactNode;
  title: string;
  expanderState?: boolean;
};

export default function Expander({
  children,
  title,
  expanderState = false,
}: ExpanderProps) {
  const [expanderOpen, setExpanderOpen] = useState(expanderState);
  const [isBigScreen] = useWindowSize();

  return (
    <StyledFooterExpanderContainer>
      <StyledExpanderHeader>
        <div onClick={() => setExpanderOpen(!expanderOpen)}>{title}</div>
        {!isBigScreen && (
          <ExpanderButton
            expanderOpen={expanderOpen}
            onClick={() => setExpanderOpen(!expanderOpen)}
          />
        )}
      </StyledExpanderHeader>
      <StyledExpanderChildren $expanderOpen={expanderOpen}>
        {children}
      </StyledExpanderChildren>
    </StyledFooterExpanderContainer>
  );
}

const StyledFooterExpanderContainer = styled.div`
  position: relative;
  line-height: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.defaultFont};
  padding-bottom: 1.1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-bottom: none;
  }
`;

const StyledExpanderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 1.1rem;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    margin-bottom: 2rem;
  }
`;

const StyledExpanderChildren = styled.div<{ $expanderOpen: boolean }>`
  overflow: hidden;
  transition: all 0.5s ease;
  font-size: ${({ theme }) => theme.fonts.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  ${({ $expanderOpen }) => css`
    max-height: ${$expanderOpen ? "10rem" : "0"};
  `};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    max-height: 20rem;
  }
`;
