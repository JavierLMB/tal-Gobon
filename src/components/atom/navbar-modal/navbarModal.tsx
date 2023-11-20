import styled, { css } from "styled-components";

type NavbarModalType = {
  navModalOpen: boolean;
};

export default function NavbarModal({ navModalOpen }: NavbarModalType) {
  return (
    <StyledNavbarModalContainer
      $navModalOpen={navModalOpen}
    ></StyledNavbarModalContainer>
  );
}

const StyledNavbarModalContainer = styled.div<{
  $navModalOpen: boolean;
}>`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 27rem;
  height: 100vh;
  transition: left 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $navModalOpen }) => css`
    left: ${$navModalOpen ? "-1rem" : "-27rem"};
  `};
`;
