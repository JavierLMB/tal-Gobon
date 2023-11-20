import styled, { css } from "styled-components";

type NavbarModaltype = {
  navModalOpen: boolean;
};

export default function NavbarModal({ navModalOpen }: NavbarModaltype) {
  return (
    <StyledNavbarModalContainer
      $navModalOpen={navModalOpen}
    ></StyledNavbarModalContainer>
  );
}

const StyledNavbarModalContainer = styled.div<{
  $navModalOpen: boolean;
}>`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 27rem;
  height: 100%;
  transition: left 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $navModalOpen }) => css`
    left: ${$navModalOpen ? "0rem" : "-27rem"};
  `};
`;
