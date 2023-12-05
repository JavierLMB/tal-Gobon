"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import NavbarModal from "@/components/header/organsim/navbar-modal/navbarModal";
import NavButton from "@/components/header/atom/nav-button/navButton";
import CartCounter from "../../atom/cart-counter/cartCounter";

export default function Header() {
  const [navModalOpen, setNavModalOpen] = useState(false);

  return (
    <StyledHeaderContainer>
      <NavbarModal
        navModalOpen={navModalOpen}
        onClick={() => setNavModalOpen(!navModalOpen)}
      />
      <StyledLink href="/">
        <StyledLogoContainer onClick={() => setNavModalOpen(false)}>
          <StyledLogoImage
            src={"/GobonLogo/small/GobonLogo.png"}
            alt={"tal Gobon Logo"}
            width={50}
            height={50}
            priority
          />
          <StyledLogoName>tal-Ġobon</StyledLogoName>
        </StyledLogoContainer>
      </StyledLink>
      <StyledIcon>
        <StyledLink href="/cart">
          <StyledCartIcon />
        </StyledLink>
        <CartCounter />
        <NavButton
          navModalOpen={navModalOpen}
          onClick={() => setNavModalOpen(!navModalOpen)}
        />
      </StyledIcon>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  position: sticky;
  top: 0rem;
  z-index: 4;

  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLogoName = styled.div`
  font-size: ${({ theme }) => theme.fonts.header1Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledIcon = styled.div`
  display: flex;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fonts.header1Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogoImage = styled(Image)`
  display: block;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledCartIcon = styled(FaCartShopping)`
  display: block;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
