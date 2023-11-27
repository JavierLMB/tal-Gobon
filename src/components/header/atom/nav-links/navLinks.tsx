import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

type NavLinksProps = {
  link: string;
  children: ReactNode;
  name: string;
};

export default function NavLinks({ link, children, name }: NavLinksProps) {
  return (
    <StyledLink href={link}>
      {children}
      <StyledNavOptions>{name}</StyledNavOptions>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  text-decoration: none;
`;

const StyledNavOptions = styled.div`
  font-size: 3rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
