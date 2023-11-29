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
  align-items: flex-end;
  text-decoration: none;
  overflow: hidden;
`;

const StyledNavOptions = styled.div`
  display: flex;
  font-size: 3rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
