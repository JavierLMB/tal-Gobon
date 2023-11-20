import styled from "styled-components";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { LiaCheeseSolid } from "react-icons/lia";
import { useState } from "react";
import NavbarModal from "@/components/atom/navbar-modal/navbarModal";
import NavButton from "@/components/atom/nav-button/navButton";

export default function Header() {
  const [navModalOpen, setNavModalOpen] = useState(false);
  console.log(navModalOpen);
  return (
    <StyledHeaderContainer>
      <NavbarModal navModalOpen={navModalOpen} />
      <Link href="/" style={{ textDecoration: "none" }}>
        <StyledLogoContainer>
          <StyledGobonLogo />
          <StyledLogoName>tal-Gobon</StyledLogoName>
        </StyledLogoContainer>
      </Link>
      <StyledIcon>
        <FaCartShopping />
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
  font-size: ${({ theme }) => theme.sizes.header1Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledIcon = styled.div`
  display: flex;
  gap: 2rem;
  font-size: ${({ theme }) => theme.sizes.header1Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledGobonLogo = styled(LiaCheeseSolid)`
  padding: 0.5rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  border-radius: 50%;
  transform: rotate(10deg);
`;
