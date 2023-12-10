import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import NavbarModal from "@/components/header/organsim/navbar-modal/navbarModal";
import NavLinksContainerDesktop from "../../molecule/nav-links-container/navLinksContainerDesktop";
import NavButton from "@/components/header/atom/nav-button/navButton";
import CartCounter from "../../atom/cart-counter/cartCounter";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

export default function Header() {
  const [navModalOpen, setNavModalOpen] = useState(false);
  const [isBigScreen, isSmallScreen] = useWindowSize();

  return (
    <StyledHeaderContainer>
      {isSmallScreen && (
        <NavbarModal
          navModalOpen={navModalOpen}
          onClick={() => setNavModalOpen(!navModalOpen)}
        />
      )}
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
      <StyledDesktopNavContainer>
        {isBigScreen && <NavLinksContainerDesktop />}
        <StyledIcon>
          <StyledLink href="/cart">
            <StyledCartDesktopContainer>
              {(isBigScreen || isSmallScreen) && <StyledCartIcon />}
              {isBigScreen && (
                <StyledCartDesktopName>Cart</StyledCartDesktopName>
              )}
            </StyledCartDesktopContainer>
          </StyledLink>
          <CartCounter />
          {isSmallScreen && (
            <NavButton
              navModalOpen={navModalOpen}
              onClick={() => setNavModalOpen(!navModalOpen)}
            />
          )}
        </StyledIcon>
      </StyledDesktopNavContainer>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow-x: hidden;
  position: sticky;
  top: 0rem;
  z-index: 4;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledDesktopNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const StyledCartDesktopContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  &:hover {
    color: ${({ theme }) => theme.colors.accentGoldLight};
  }
`;

const StyledCartDesktopName = styled.div`
  font-size: 3rem;
  height: 2rem;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLogoName = styled.div`
  font-size: ${({ theme }) => theme.fonts.header1Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  &:hover {
    color: ${({ theme }) => theme.colors.accentGoldLight};
  }
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
  box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
`;

const StyledCartIcon = styled(FaCartShopping)`
  display: block;
`;
