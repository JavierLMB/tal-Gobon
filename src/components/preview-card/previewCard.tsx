import styled from "styled-components";

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
  return (
    <StyledProductCard>
      <a>
        <StyledImage src={image}></StyledImage>
      </a>
      <h3>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h3>

      <div>{price}</div>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 19rem;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 22rem;
  margin-bottom: 2rem;
`;
