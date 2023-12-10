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
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 22rem;
    width: 70rem;
  }
`;

const StyledCheeeseDescription = styled.div`
  font-style: italic;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    margin: 0;
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledAdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  }
`;

const StyledAdditionalInfoTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledAdditionalInfoValue = styled.span`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledAdditionalInfoPrice = styled.h3`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fonts.header3Font};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header1Font};
  }
`;
const StyledAdditionalInfoPriceKg = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fonts.smallFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
  }
`;
