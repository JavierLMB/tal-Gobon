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
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: 5rem;
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
