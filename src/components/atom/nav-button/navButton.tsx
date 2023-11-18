import styled, { css } from "styled-components";

type NavButtonType = {
  navModalOpen: boolean;
  onClick: () => void;
};

export default function NavButton({ navModalOpen, onClick }: NavButtonType) {
  return (
    <StyledNavButtonContainer $navModalOpen={navModalOpen} onClick={onClick}>
      <StyledLineSmall1 $width="60%" />
      <StyledLineBig1 $width="100%" />
      <StyledLineSmall2 $width="60%" />
      <StyledLineBig2 $width="100%" />
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
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  height: 0.4rem;
  border-radius: 1rem;
  ${({ $width }) => css`
    width: ${$width};
  `};
`;

const StyledLineSmall1 = styled(StyledLine)`
  top: 0rem;
`;

const StyledLineBig1 = styled(StyledLine)`
  top: 0.8rem;
`;

const StyledLineSmall2 = styled(StyledLine)`
  bottom: 0.8rem;
`;

const StyledLineBig2 = styled(StyledLine)`
  bottom: 0rem;
`;
