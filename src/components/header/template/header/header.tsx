import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import NavbarModal from "@/components/header/organsim/navbar-modal/navbarModal";
import NavButton from "@/components/header/atom/nav-button/navButton";

export default function Header() {
  const [navModalOpen, setNavModalOpen] = useState(false);
  return (
    <StyledHeaderContainer>
      <NavbarModal
        navModalOpen={navModalOpen}
        onClick={() => setNavModalOpen(!navModalOpen)}
      />
      <StyledLink href="/">
        <StyledLogoContainer>
          {/* <StyledImage
            src={"/../public/GobonLogo.png"}
            alt={"tal Gobon Logo"}
            width={270}
            height={260}
            priority
          /> */}
          <StyledLogoName>tal-Gobon</StyledLogoName>
        </StyledLogoContainer>
      </StyledLink>
      <StyledIcon>
        <FaCartShopping />
        <NavButton
          navModalOpen={navModalOpen}
          onClick={() => setNavModalOpen(!navModalOpen)}
        />
      </StyledIcon>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  position: sticky;
  top: 0rem;
  z-index: 4;

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

// import styled from "styled-components";
// import Link from "next/link";
// import { FaCartShopping } from "react-icons/fa6";
// import { LiaCheeseSolid } from "react-icons/lia";
// import { useState } from "react";
// import NavbarModal from "@/components/header/organsim/navbar-modal/navbarModal";
// import NavButton from "@/components/header/atom/nav-button/navButton";

// export default function Header() {
//   const [navModalOpen, setNavModalOpen] = useState(false);
//   return (
//     <StyledHeaderContainer>
//       <NavbarModal
//         navModalOpen={navModalOpen}
//         onClick={() => setNavModalOpen(!navModalOpen)}
//       />
//       <StyledLink href="/">
//         <StyledLogoContainer>
//           <StyledGobonLogo />
//           <StyledLogoName>tal-Gobon</StyledLogoName>
//         </StyledLogoContainer>
//       </StyledLink>
//       <StyledIcon>
//         <FaCartShopping />
//         <NavButton
//           navModalOpen={navModalOpen}
//           onClick={() => setNavModalOpen(!navModalOpen)}
//         />
//       </StyledIcon>
//     </StyledHeaderContainer>
//   );
// }

// const StyledHeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   margin-bottom: 1rem;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
//   overflow-x: hidden;
//   position: sticky;
//   top: 0rem;
//   z-index: 4;

//   background: linear-gradient(
//     45deg,
//     ${({ theme }) => theme.colors.primaryDark},
//     ${({ theme }) => theme.colors.primaryLight}
//   );
// `;

// const StyledLogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const StyledLogoName = styled.div`
//   font-size: ${({ theme }) => theme.sizes.header1Font};
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
// `;

// const StyledIcon = styled.div`
//   display: flex;
//   gap: 2rem;
//   font-size: ${({ theme }) => theme.sizes.header1Font};
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
// `;

// const StyledGobonLogo = styled(LiaCheeseSolid)`
//   padding: 0.5rem;
//   font-size: 4rem;
//   color: ${({ theme }) => theme.colors.primaryDark};
//   background-color: ${({ theme }) => theme.colors.accentGoldLighter};
//   border-radius: 50%;
//   transform: rotate(10deg);
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
