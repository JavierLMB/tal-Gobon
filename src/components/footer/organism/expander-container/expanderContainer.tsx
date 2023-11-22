import styled, { css } from "styled-components";
import Expander from "../../molecule/expander/expander";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function ExpanderContainer() {
  return (
    <StyledExpanderMainContainer>
      <Expander title="Customer services">
        <StyledChildrenContainer>
          <div>FAQ</div>
          <div>Orders & payments</div>
          <div>Delivery & returns</div>
          <div>Track order</div>
        </StyledChildrenContainer>
      </Expander>
      <Expander title="Information">
        <StyledChildrenContainer>
          <div>My Account</div>
          <div>Personalisation</div>
          <div>Student</div>
          <div>Find your local store</div>
        </StyledChildrenContainer>
      </Expander>
      <Expander title="About us">
        <StyledChildrenContainer>
          <div>Careers</div>
          <div>Promotion Terms</div>
          <div>Terms & conditions</div>
          <div>Corporate</div>
        </StyledChildrenContainer>
      </Expander>
      <Expander title="Follow us on social">
        <StyledChildrenContainer>
          <StyledSocialContainer>
            <StyledFacebookIcon /> /talgobon
          </StyledSocialContainer>
          <StyledSocialContainer>
            <StyledInsagramIcon />
            @talgobon
          </StyledSocialContainer>
          <StyledSocialContainer>
            <StyledYoutubeIcon />
            Gobon Malta
          </StyledSocialContainer>
        </StyledChildrenContainer>
      </Expander>
    </StyledExpanderMainContainer>
  );
}

const StyledExpanderMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const commonIconStyles = css`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.sizes.header1Font};
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const StyledFacebookIcon = styled(FaFacebook)`
  ${commonIconStyles}
`;

const StyledInsagramIcon = styled(FaInstagram)`
  ${commonIconStyles}
`;
const StyledYoutubeIcon = styled(FaYoutube)`
  ${commonIconStyles}
`;
