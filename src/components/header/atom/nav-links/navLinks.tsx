import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

type NavLinksProps = {
  link: string;
  children: ReactNode;
  name: string;
  onClick?: () => void;
};

export default function NavLinks({
  link,
  children,
  name,
  onClick,
}: NavLinksProps) {
  return (
    <StyledLink href={link} onClick={onClick}>
      <StyledContentContainer>
        {children}
        <StyledNavOptions>{name}</StyledNavOptions>
      </StyledContentContainer>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.accentGoldLighter};

  &:hover {
    color: ${({ theme }) => theme.colors.accentGoldLight};

    div {
      color: ${({ theme }) => theme.colors.accentGoldLight};
    }
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    align-items: center;
    line-height: 1;
    gap: 1rem;
  }
`;

const StyledNavOptions = styled.div`
  display: flex;
  font-size: 3rem;
  height: 2rem;
`;
