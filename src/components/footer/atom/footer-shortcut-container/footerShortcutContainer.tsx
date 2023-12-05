import styled, { css } from "styled-components";
import { FaLocationDot, FaUserLarge } from "react-icons/fa6";

export default function FooterShortcutContainer() {
  return (
    <StyledFooterShortcutMainContainer>
      <StyledFooterShortcutInnerContainer>
        <StyledLocationIcon />
        <div>Store finder</div>
      </StyledFooterShortcutInnerContainer>
      <StyledFooterShortcutInnerContainer>
        <StyledCareIcon />
        <div>Customer Service</div>
      </StyledFooterShortcutInnerContainer>
    </StyledFooterShortcutMainContainer>
  );
}

const StyledFooterShortcutMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
  line-height: 1;
`;
const StyledFooterShortcutInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.defaultFont};
  font-size: ${({ theme }) => theme.fonts.smallFont};
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.header1Font};
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const StyledLocationIcon = styled(FaLocationDot)`
  ${commonIconStyles}
`;

const StyledCareIcon = styled(FaUserLarge)`
  ${commonIconStyles}
`;
