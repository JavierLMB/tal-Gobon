import styled from "styled-components";

type CheeseDescriptionProps = {
  cheeseObject?: {
    desc: string;
    country: string;
    animal: string;
    pricePerKg: number;
  };
};

export default function CheeseDescription({
  cheeseObject,
}: CheeseDescriptionProps) {
  return (
    <StyledCheeeseDetails>
      <StyledCheeeseDescription>{cheeseObject?.desc}</StyledCheeeseDescription>
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
          € {cheeseObject?.pricePerKg}
          <StyledAdditionalInfoPriceKg>/Kg</StyledAdditionalInfoPriceKg>
        </StyledAdditionalInfoPrice>
      </StyledAdditionalInfoContainer>
    </StyledCheeeseDetails>
  );
}

const StyledCheeeseDetails = styled.div`
  padding: 1rem 0rem;
  line-height: 1.2;
  padding: 0rem 2rem;
`;

const StyledCheeeseDescription = styled.div`
  font-style: italic;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledAdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledAdditionalInfoTitle = styled.div`
  font-weight: 200;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
`;

const StyledAdditionalInfoValue = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
`;

const StyledAdditionalInfoPrice = styled.h3`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.sizes.header3Font};
`;
const StyledAdditionalInfoPriceKg = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.sizes.smallFont};
`;
