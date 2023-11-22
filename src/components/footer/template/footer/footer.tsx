import styled from "styled-components";
import ExpanderContainer from "../../organism/expander-container/expanderContainer";

export default function Footer() {
  return (
    <StyledFooterMainContainer>
      <ExpanderContainer />
    </StyledFooterMainContainer>
  );
}

const StyledFooterMainContainer = styled.div`
  padding: 1rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;
