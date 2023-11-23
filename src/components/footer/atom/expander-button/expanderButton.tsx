import styled, { css } from "styled-components";

type ExpanderButtonProps = {
  expanderOpen: boolean;
  onClick: () => void;
};

export default function ExpanderButton({
  expanderOpen,
  onClick,
}: ExpanderButtonProps) {
  return (
    <div onClick={onClick}>
      <StyledLine1 $expanderOpen={expanderOpen} />
      <StyledLine2 $expanderOpen={expanderOpen} />
    </div>
  );
}

const StyledLine = styled.div`
  position: absolute;
  height: 0.2rem;
  width: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  background-color: ${({ theme }) => theme.colors.defaultFont};
  transition: all 0.3s cubic-bezier(0.01, -0.02, 0.51, 1.6);
`;

const StyledLine1 = styled(StyledLine)<{ $expanderOpen: boolean }>`
  top: 1rem;
  right: 0rem;

  ${({ $expanderOpen }) => css`
    transform: rotate(${$expanderOpen ? "0deg" : "90deg"});
  `};
`;

const StyledLine2 = styled(StyledLine)<{ $expanderOpen: boolean }>`
  top: 1rem;

  ${({ $expanderOpen }) => css`
    right: ${$expanderOpen ? "-5rem" : "0rem"};
  `};
`;
