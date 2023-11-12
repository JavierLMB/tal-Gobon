import styled, { css } from "styled-components";

type PreviewCardProps = {
  category: string;
  image: string;
  price: number;
  title: string;
};

export default function PreviewCard({
  category,
  image,
  price,
  title,
}: PreviewCardProps) {
  return <StyledSessionCard> </StyledSessionCard>;
}

const StyledSessionCard = styled.div`
  height: 72px;
  width: 100%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
`;
