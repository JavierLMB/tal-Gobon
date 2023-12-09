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
      {children}
      <StyledNavOptions>{name}</StyledNavOptions>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  text-decoration: none;
  overflow: hidden;
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
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
