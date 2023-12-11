import styled, { keyframes } from "styled-components";
import { BiCheese } from "react-icons/bi";

export default function CartLoader() {
  return (
    <StyledLoaderContainer>
      <StyledCheeseContainer>
        <StyledCheeseIcon />
      </StyledCheeseContainer>
      <StyledDotsContainer>
        <StyledDot $delay="0s" />
        <StyledDot $delay="0.2s" />
        <StyledDot $delay="0.4s" />
      </StyledDotsContainer>
    </StyledLoaderContainer>
  );
}

const StyledLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledCheeseContainer = styled.div`
  padding: 2rem;
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledCheeseIcon = styled(BiCheese)`
  transform: scale(-1, 1);
  font-size: clamp(5rem, 15vw, 7rem);
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const dotFade = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

const StyledDotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDot = styled.div<{ $delay: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 4px;
  animation: ${dotFade} 0.9s infinite ${({ $delay }) => $delay || "0s"};
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
