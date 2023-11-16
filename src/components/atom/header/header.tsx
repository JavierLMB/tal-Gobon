import styled from "styled-components";
import { FaAlignRight, FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer>
        <StyledLogoImage
          src="/cheeseLogo.png"
          alt="tal-Gobon logo"
        ></StyledLogoImage>
        <StyledLogoName>tal-Gobon</StyledLogoName>
      </StyledLogoContainer>
      <StyledIcon>
        <FaCartShopping />
        <FaAlignRight />
      </StyledIcon>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 4rem;
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
const StyledLogoImage = styled.img`
  display: block;
  width: 4rem;
  height: 4rem;
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
