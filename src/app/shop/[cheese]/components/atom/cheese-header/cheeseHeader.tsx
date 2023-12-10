import styled from "styled-components";
import Link from "next/link";

type CheeseHeaderProps = {
  cheeseObject?: {
    name: string;
  };
};

export default function CheeseHeader({ cheeseObject }: CheeseHeaderProps) {
  return (
    <StyledCheeseHeaderContainer>
      <StyledTitle>{cheeseObject?.name}</StyledTitle>
      <StyledLink href="/shop">
        <StyledContinueBrowsingCointainer>
          <StyledContinueBrowsingArrrow>&larr;</StyledContinueBrowsingArrrow>
          <div>Continue Browsing</div>
        </StyledContinueBrowsingCointainer>
      </StyledLink>
    </StyledCheeseHeaderContainer>
  );
}

const StyledCheeseHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledContinueBrowsingCointainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  margin-right: 2rem;
  line-height: 1.2;
  gap: 0.5rem;
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fonts.smallFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
  }

  &:hover {
    transform: translateX(-3px);
  }

  &:active {
    transform: translateX(-1px);
  }
`;

const StyledContinueBrowsingArrrow = styled.div`
  font-size: ${({ theme }) => theme.fonts.header3Font};
`;

const StyledTitle = styled.h2`
  padding: 0rem 1rem;
  font-size: ${({ theme }) => theme.fonts.header2Font};
  text-decoration: underline;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header1Font};
  }
`;
