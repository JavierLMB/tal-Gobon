import styled, { css } from "styled-components";
import NavLinks from "../../atom/nav-links/navLinks";
import { FaBasketShopping } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";

export default function NavLinksContainerDesktop() {
  return (
    <StyledContentContainer>
      <NavLinks link={"/shop"} name={"Shop"}>
        <StyledShopIcon />
      </NavLinks>
      <NavLinks link={"/about"} name={"About"}>
        <StyledAboutIcon />
      </NavLinks>
    </StyledContentContainer>
  );
}

const StyledContentContainer = styled.div`
  gap: 4rem;
  display: flex;
  align-items: center;
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledShopIcon = styled(FaBasketShopping)`
  ${commonIconStyles}
`;

const StyledAboutIcon = styled(GiChefToque)`
  ${commonIconStyles}
`;
