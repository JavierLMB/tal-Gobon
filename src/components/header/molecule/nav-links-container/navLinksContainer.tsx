import styled, { css } from "styled-components";
import NavLinks from "../../atom/nav-links/navLinks";
import { FaHome } from "react-icons/fa";
import { FaBasketShopping, FaCartShopping } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";

export default function NavLinksContainer() {
  return (
    <StyledContentContainer>
      <NavLinks link={"/"} name={"Home"}>
        <StyledHomeIcon />
      </NavLinks>
      <NavLinks link={"/shop"} name={"Shop"}>
        <StyledShopIcon />
      </NavLinks>
      <NavLinks link={"/about"} name={"About"}>
        <StyledAboutIcon />
      </NavLinks>
      <NavLinks link={"/cart"} name={"Cart"}>
        <StyledCartIcon />
      </NavLinks>
    </StyledContentContainer>
  );
}

const StyledContentContainer = styled.div`
  margin-top: 4rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledHomeIcon = styled(FaHome)`
  ${commonIconStyles}
`;

const StyledShopIcon = styled(FaBasketShopping)`
  ${commonIconStyles}
`;

const StyledAboutIcon = styled(GiChefToque)`
  ${commonIconStyles}
`;
const StyledCartIcon = styled(FaCartShopping)`
  ${commonIconStyles}
`;
