"use client";
import styled from "styled-components";
import Header from "@/components/molecule/header/header";
import { cheesesData } from "../components/organism/shop-view-container/useCheeseData";

type cheesePageProps = {
  params: { cheese: string };
};

export default function CheesePage({ params }: cheesePageProps) {
  const cheeseObject = cheesesData.find(
    (cheese) =>
      params.cheese.replace(/([a-z])([A-Z])/g, "$1 $2") === cheese.name
  );

  console.log(cheeseObject);

  return (
    <div>
      <Header />
      <StyledCheeseViewContainer>
        <StyledTitle>{cheeseObject?.name}</StyledTitle>
        <StyledImagesContainer>
          {cheeseObject &&
            Object.entries(cheeseObject.images).map(([key, image]) => (
              <StyledImage
                key={key}
                src={image}
                alt={cheeseObject?.name}
              ></StyledImage>
            ))}
        </StyledImagesContainer>
        <StyledCheeeseDetails>
          <StyledCheeeseDescription>
            {cheeseObject?.desc}
          </StyledCheeeseDescription>
          <StyledAdditionalInfoContainer>
            <div>
              <StyledAdditionalInfoTitle>
                Country:{" "}
                <StyledAdditionalInfoValue>
                  {cheeseObject?.country}
                </StyledAdditionalInfoValue>
              </StyledAdditionalInfoTitle>
              <StyledAdditionalInfoTitle>
                Animal:{" "}
                <StyledAdditionalInfoValue>
                  {cheeseObject?.animal}
                </StyledAdditionalInfoValue>
              </StyledAdditionalInfoTitle>
            </div>
            <StyledAdditionalInfoPrice>
              {cheeseObject?.pricePerKg}
              <StyledAdditionalInfoPriceKg>/Kg</StyledAdditionalInfoPriceKg>
            </StyledAdditionalInfoPrice>
          </StyledAdditionalInfoContainer>
        </StyledCheeeseDetails>
      </StyledCheeseViewContainer>
    </div>
  );
}

const StyledCheeseViewContainer = styled.div`
  margin-top: 1.5rem;
`;

const StyledTitle = styled.h2`
  padding: 0rem 1rem;
  font-size: ${({ theme }) => theme.sizes.header2Font};
  text-decoration: underline;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  padding: 0rem 1rem 1rem 1rem;
  gap: 0.5rem;
  overflow-x: auto;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledCheeeseDetails = styled.div`
  padding: 1rem 0rem;
  line-height: 1.2;
`;

const StyledCheeeseDescription = styled.div`
  padding: 1rem 2rem 0.5rem 2rem;
  font-style: italic;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledAdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledAdditionalInfoTitle = styled.div`
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  font-weight: 200;
`;

const StyledAdditionalInfoValue = styled.span`
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  font-weight: 700;
`;

const StyledAdditionalInfoPrice = styled.h3`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.sizes.header3Font};
`;
const StyledAdditionalInfoPriceKg = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.sizes.smallFont};
`;
