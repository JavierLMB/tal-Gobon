import styled from "styled-components";
import ExpanderContainer from "../../organism/expander-container/expanderContainer";
import FooterShortcutContainer from "../../atom/footer-shortcut-container/footerShortcutContainer";
import CopyrightYear from "../../atom/copyright-year/copyrightYear";
import Newsletter from "../../atom/newsletter/newsletter";

export default function Footer() {
  return (
    <StyledFooterMainContainer>
      <Newsletter />
      <ExpanderContainer />
      <FooterShortcutContainer />
      <CopyrightYear />
    </StyledFooterMainContainer>
  );
}

const StyledFooterMainContainer = styled.div`
  padding: 5rem 2rem;
  overflow-x: hidden;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  border-bottom: 5px solid ${({ theme }) => theme.colors.accentGoldLighter};
`;
