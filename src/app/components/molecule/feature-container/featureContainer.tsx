import Feature from "../../atom/feature/feature";
import styled, { css } from "styled-components";
import { FaPercentage } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";

export default function FeatureContainer() {
  return (
    <StyledFeatureContainer>
      <Feature
        title={"Weekly Offers & Discounts"}
        content={"Discover exclusive savings on premium cheeses every week."}
      >
        <StyledPercentageIcon />
      </Feature>
      <Feature
        title={"Fast & Free Deliveries"}
        content={
          "Enjoy prompt and free delivery, ensuring your favorite cheeses arrive fresh at your doorstep."
        }
      >
        <StyledBikeIcon />
      </Feature>
      <Feature
        title={"High Rated Cheesemonger"}
        content={
          "Rely on our expert Cheesemongers for personalized guidance, making your cheese selection a breeze."
        }
      >
        <StyledCheckIcon />
      </Feature>
      <Feature
        title={"Premium Quality"}
        content={
          "Indulge in a world of exquisite flavors with our curated selection of premium-quality cheeses."
        }
      >
        <StyledPremiumIcon />
      </Feature>
    </StyledFeatureContainer>
  );
}

const StyledFeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
  padding: 0rem 1rem;
  gap: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpLarge}) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: clamp(5rem, 1rem + 5vw, 9rem);
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledPercentageIcon = styled(FaPercentage)`
  ${commonIconStyles}
`;

const StyledBikeIcon = styled(RiEBike2Fill)`
  ${commonIconStyles}
`;

const StyledCheckIcon = styled(FaCheckDouble)`
  ${commonIconStyles}
`;
const StyledPremiumIcon = styled(MdWorkspacePremium)`
  ${commonIconStyles}
`;
