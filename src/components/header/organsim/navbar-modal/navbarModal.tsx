import styled, { css } from "styled-components";
import NavLinksContainer from "../../molecule/nav-links-container/navLinksContainer";
import Link from "next/link";
import Image from "next/image";

type NavbarModalProps = {
  navModalOpen: boolean;
  onClick: () => void;
};

export default function NavbarModal({
  navModalOpen,
  onClick,
}: NavbarModalProps) {
  return (
    <>
      <StyledNavbarModalBackground
        onClick={onClick}
        $navModalOpen={navModalOpen}
      ></StyledNavbarModalBackground>
      <StyledNavbarModalContainer $navModalOpen={navModalOpen}>
        <StyledOuterLogoContainer>
          <StyledLogoContainer>
            <StyledLink href="/">
              <StyledLogoImage
                src={"/GobonLogo/small/GobonLogo.png"}
                alt={"tal Gobon Logo"}
                width={80}
                height={80}
                priority
                onClick={onClick}
              />
            </StyledLink>
          </StyledLogoContainer>
        </StyledOuterLogoContainer>
        <NavLinksContainer onClick={onClick} />
      </StyledNavbarModalContainer>
    </>
  );
}

const StyledNavbarModalContainer = styled.div<{
  $navModalOpen: boolean;
}>`
  position: fixed;
  top: 8rem;
  z-index: 4;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  width: 21rem;
  padding: 3rem 2rem 3rem 3rem;
  line-height: 0;
  transition: left 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );

  ${({ $navModalOpen }) => css`
    left: ${$navModalOpen ? "-1rem" : "-27rem"};
    box-shadow: ${$navModalOpen ? "2px 0 10px rgba(0, 0, 0, 0.5)" : "none"};
  `};
`;

const StyledNavbarModalBackground = styled.div<{ $navModalOpen: boolean }>`
  position: fixed;
  top: 6.7rem;
  right: 0rem;
  z-index: 3;
  width: 100%;
  height: 150rem;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  ${({ $navModalOpen }) =>
    css`
      transform: translateX(${$navModalOpen ? "0%" : "100%"});
    `};
`;

const StyledOuterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLogoImage = styled(Image)`
  display: block;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  text-decoration: none;
`;
