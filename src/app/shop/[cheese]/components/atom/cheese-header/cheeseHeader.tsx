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
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fonts.smallFont};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
  }
`;

const StyledContinueBrowsingArrrow = styled.div`
  font-size: ${({ theme }) => theme.fonts.header3Font};
`;

const StyledTitle = styled.h2`
  padding: 0rem 1rem;
  font-size: ${({ theme }) => theme.fonts.header2Font};
  text-decoration: underline;
`;
