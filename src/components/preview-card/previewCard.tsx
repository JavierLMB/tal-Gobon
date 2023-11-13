import styled from "styled-components";

type PreviewCardProps = {
  image1: string;
  name: string;
  animal: string;
  pricePerKg: number;
};

export default function PreviewCard({
  image1,
  name,
  animal,
  pricePerKg,
}: PreviewCardProps) {
  return (
    <StyledProductCard>
      <a>
        <StyledImage src={image1}></StyledImage>
      </a>
      <h3>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</h3>

      <div>{pricePerKg}</div>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  /* padding: 2rem; */
  width: 19rem;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 22rem;
  margin-bottom: 2rem;
  object-fit: cover;
`;
