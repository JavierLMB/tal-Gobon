import styled, { css } from "styled-components";

type NavButtonType = {
  navModalOpen: boolean;
  onClick: () => void;
};

export default function NavButton({ navModalOpen, onClick }: NavButtonType) {
  return (
    <StyledNavButtonContainer $navModalOpen={navModalOpen} onClick={onClick}>
      <StyledLineSmall1 $width="60%" $navModalOpen={navModalOpen} />
      <StyledLineBig1 $width="100%" $navModalOpen={navModalOpen} />
      <StyledLineSmall2 $width="60%" $navModalOpen={navModalOpen} />
      <StyledLineBig2 $width="100%" $navModalOpen={navModalOpen} />
    </StyledNavButtonContainer>
  );
}

const StyledNavButtonContainer = styled.div<{
  $navModalOpen: boolean;
}>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  height: 2.8rem;
  width: 2.8rem;
  transform: scale(0.9);

  ${({ $navModalOpen }) => css`
    /* left: ${$navModalOpen ? "0rem" : "-27rem"}; */ //////
  `};
`;

const StyledLine = styled.div<{ $width: string }>`
  position: absolute;
  height: 0.4rem;
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  ${({ $width }) => css`
    width: ${$width};
  `};
`;

const StyledLineSmall1 = styled(StyledLine)<{
  $navModalOpen: boolean;
}>`
  ${({ $navModalOpen }) => css`
    right: ${$navModalOpen ? "-3rem" : "0rem"};
    top: 0rem;
  `};
`;

const StyledLineBig1 = styled(StyledLine)<{
  $navModalOpen: boolean;
}>`
  ${({ $navModalOpen }) => css`
    top: ${$navModalOpen ? "1.1rem" : "0.8rem"};
    transform: rotate(${$navModalOpen ? "120deg" : "0deg"});
  `};
`;

const StyledLineSmall2 = styled(StyledLine)<{
  $navModalOpen: boolean;
}>`
  bottom: 0.8rem;
  ${({ $navModalOpen }) => css`
    right: ${$navModalOpen ? "-3rem" : "0rem"};
  `};
`;

const StyledLineBig2 = styled(StyledLine)<{
  $navModalOpen: boolean;
}>`
  ${({ $navModalOpen }) => css`
    bottom: ${$navModalOpen ? "1.1rem" : "0rem"};
    transform: rotate(${$navModalOpen ? "-120deg" : "0deg"});
  `};
`;
