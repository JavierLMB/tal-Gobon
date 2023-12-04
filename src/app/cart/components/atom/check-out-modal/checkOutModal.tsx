import styled, { css } from "styled-components";

type CheckOutModalProps = {
  checkOutModalOpen: boolean;
  onClick: () => void;
};

export default function CheckOutModal({
  onClick,
  checkOutModalOpen,
}: CheckOutModalProps) {
  return (
    <>
      <StyledCheckOutModalBackground
        $checkOutModalOpen={checkOutModalOpen}
        onClick={onClick}
      />
      <StyledCheckOutModalContainer $checkOutModalOpen={checkOutModalOpen}>
        <StyledCloseButtonText onClick={onClick}>X</StyledCloseButtonText>
        <StyledCheckOutText>
          Thank you for checking out tal-Ġobon. I hope you have a lovely day. 😄
        </StyledCheckOutText>
      </StyledCheckOutModalContainer>
    </>
  );
}

const StyledCheckOutModalBackground = styled.div<{
  $checkOutModalOpen: boolean;
}>`
  position: fixed;
  top: 6.7rem;
  right: 0rem;
  z-index: 1;
  width: 100%;
  height: 150rem;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  ${({ $checkOutModalOpen }) =>
    css`
      transform: translateX(${$checkOutModalOpen ? "0%" : "100%"});
    `};
`;

const StyledCheckOutModalContainer = styled.div<{
  $checkOutModalOpen: boolean;
}>`
  position: fixed;
  z-index: 2;
  padding: 2rem;
  top: 40%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 5px solid ${({ theme }) => theme.colors.accentGoldLight};
  transition: all 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $checkOutModalOpen }) => css`
    top: ${$checkOutModalOpen ? "40%" : "-30%"};
  `};
`;

const StyledCheckOutText = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
const StyledCloseButtonText = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  font-size: ${({ theme }) => theme.sizes.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
