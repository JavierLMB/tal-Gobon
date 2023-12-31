import styled, { css } from "styled-components";
import NavLinks from "../../atom/nav-links/navLinks";
import { FaHome } from "react-icons/fa";
import { FaBasketShopping, FaCartShopping } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";

type NavLinksContainerProps = {
  onClick: () => void;
};

export default function NavLinksContainerMobile({
  onClick,
}: NavLinksContainerProps) {
  return (
    <StyledContentContainer>
      <NavLinks link={"/"} name={"Home"} onClick={onClick}>
        <StyledHomeIcon />
      </NavLinks>
      <NavLinks link={"/about"} name={"About"} onClick={onClick}>
        <StyledAboutIcon />
      </NavLinks>
      <NavLinks link={"/shop"} name={"Shop"} onClick={onClick}>
        <StyledShopIcon />
      </NavLinks>
      <NavLinks link={"/cart"} name={"Cart"} onClick={onClick}>
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
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: 5rem;
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
