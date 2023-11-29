import styled, { css } from "styled-components";
import NavLinksContainer from "../../molecule/nav-links-container/navLinksContainer";
import Link from "next/link";
import Image from "next/image";

type NavbarModalType = {
  navModalOpen: boolean;
  onClick: () => void;
};

export default function NavbarModal({
  navModalOpen,
  onClick,
}: NavbarModalType) {
  return (
    <>
      <StyledNavbarModalBackground
        onClick={onClick}
        $navModalOpen={navModalOpen}
      ></StyledNavbarModalBackground>
      <StyledNavbarModalContainer $navModalOpen={navModalOpen}>
        <StyledOuterLogoContainer>
          <StyledLogoContainer>
            <StyledLink href="/">
              <StyledLogoImage
                src={"/../public/GobonLogo.png"}
                alt={"tal Gobon Logo"}
                width={270}
                height={260}
                priority
              />
            </StyledLink>
          </StyledLogoContainer>
        </StyledOuterLogoContainer>
        <NavLinksContainer />
      </StyledNavbarModalContainer>
    </>
  );
}

const StyledNavbarModalContainer = styled.div<{
  $navModalOpen: boolean;
}>`
  position: fixed;
  top: 8rem;
  z-index: 4;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  width: 21rem;
  padding: 3rem 2rem 3rem 3rem;
  line-height: 0;
  transition: left 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $navModalOpen }) => css`
    left: ${$navModalOpen ? "-1rem" : "-27rem"};
    box-shadow: ${$navModalOpen ? "2px 0 10px rgba(0, 0, 0, 0.5)" : "none"};
  `};
`;

const StyledNavbarModalBackground = styled.div<{ $navModalOpen: boolean }>`
  position: fixed;
  top: 6.7rem;
  right: 0rem;
  z-index: 3;
  width: 100%;
  height: 150rem;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  ${({ $navModalOpen }) =>
    css`
      transform: translateX(${$navModalOpen ? "0%" : "100%"});
    `};
`;

const StyledOuterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLogoImage = styled(Image)`
  display: block;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  text-decoration: none;
`;

// import styled, { css } from "styled-components";
// import { LiaCheeseSolid } from "react-icons/lia";
// import NavLinksContainer from "../../molecule/nav-links-container/navLinksContainer";
// import Link from "next/link";

// type NavbarModalType = {
//   navModalOpen: boolean;
//   onClick: () => void;
// };

// export default function NavbarModal({
//   navModalOpen,
//   onClick,
// }: NavbarModalType) {
//   return (
//     <>
//       <StyledNavbarModalBackground
//         onClick={onClick}
//         $navModalOpen={navModalOpen}
//       ></StyledNavbarModalBackground>
//       <StyledNavbarModalContainer $navModalOpen={navModalOpen}>
//         <StyledOuterLogoContainer>
//           <StyledLogoContainer>
//             <StyledLink href="/">
//               <StyledGobonLogo />
//             </StyledLink>
//           </StyledLogoContainer>
//         </StyledOuterLogoContainer>
//         <NavLinksContainer />
//       </StyledNavbarModalContainer>
//     </>
//   );
// }

// const StyledNavbarModalContainer = styled.div<{
//   $navModalOpen: boolean;
// }>`
//   position: fixed;
//   top: 8rem;
//   z-index: 4;
//   border-top-right-radius: 5rem;
//   border-bottom-right-radius: 5rem;
//   width: 21rem;
//   padding: 3rem 2rem 3rem 3rem;
//   line-height: 0;
//   transition: left 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
//   background: linear-gradient(
//     45deg,
//     ${({ theme }) => theme.colors.primaryDark},
//     ${({ theme }) => theme.colors.primaryLight}
//   );
//   ${({ $navModalOpen }) => css`
//     left: ${$navModalOpen ? "-1rem" : "-27rem"};
//     box-shadow: ${$navModalOpen ? "2px 0 10px rgba(0, 0, 0, 0.5)" : "none"};
//   `};
// `;

// const StyledNavbarModalBackground = styled.div<{ $navModalOpen: boolean }>`
//   position: fixed;
//   top: 6.7rem;
//   right: 0rem;
//   z-index: 3;
//   width: 100%;
//   height: 150rem;
//   background-color: #00000033;
//   backdrop-filter: blur(5px);
//   ${({ $navModalOpen }) =>
//     css`
//       transform: translateX(${$navModalOpen ? "0%" : "100%"});
//     `};
// `;

// const StyledOuterLogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-bottom: 3rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.accentGoldLighter};
// `;

// const StyledLogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const StyledGobonLogo = styled(LiaCheeseSolid)`
//   padding: 0.5rem;
//   font-size: 7rem;
//   color: ${({ theme }) => theme.colors.primaryDark};
//   background-color: ${({ theme }) => theme.colors.accentGoldLighter};
//   border-radius: 50%;
//   transform: rotate(10deg);
// `;

// const StyledLink = styled(Link)`
//   display: flex;
//   gap: 2rem;
//   align-items: center;
//   text-decoration: none;
// `;
