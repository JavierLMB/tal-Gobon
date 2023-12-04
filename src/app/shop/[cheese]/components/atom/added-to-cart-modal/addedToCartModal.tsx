import styled, { css } from "styled-components";

type AddedToCartModalProps = {
  addedModalVisible: boolean;
};

export default function AddedToCartModal({
  addedModalVisible,
}: AddedToCartModalProps) {
  return (
    <StyledAddedToCartModalContainer $addedModalVisible={addedModalVisible}>
      <h2>Item Added</h2>
    </StyledAddedToCartModalContainer>
  );
}

const StyledAddedToCartModalContainer = styled.div<{
  $addedModalVisible: boolean;
}>`
  position: fixed;
  top: 8rem;
  right: 0rem;
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: ${({ theme }) => theme.sizes.header3Font};
  color: ${({ theme }) => theme.colors.defaultFont};
  transition: all 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  ${({ $addedModalVisible }) => css`
    right: ${$addedModalVisible ? "0ren" : "-25rem"};
  `};
`;
