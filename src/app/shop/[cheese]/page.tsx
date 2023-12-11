"use client";
import styled from "styled-components";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import { cheesesData } from "../components/organism/shop-view-container/useCheeseData";
import CheeseHeader from "@/app/shop/[cheese]/components/atom/cheese-header/cheeseHeader";
import ImageSlider from "./components/atom/image-slider/imageSlider";
import CheeseDescription from "./components/atom/cheese-description/cheeseDescription";
import CheeseWeightPortionPrice from "./components/molecule/cheese-weight-portion--price/cheeseWeightPortionPrice";

type CheeseObjectType = {
  name: string;
  desc: string;
  country: string;
  animal: string;
  pricePerKg: number;
  imagesSmall: {
    image1Small: string;
    image2Small: string;
    image3Small: string;
  };
  imagesBig: {
    image1Big: string;
    image2Big: string;
    image3Big: string;
  };
};

type CheesePageProps = {
  params: { cheese: string };
};

export default function CheesePage({ params }: CheesePageProps) {
  const cheeseObject: CheeseObjectType | undefined = cheesesData.find(
    (cheese) =>
      params.cheese.replace(/([a-z])([A-Z])/g, "$1 $2") === cheese.name
  );
  return (
    <div>
      <Header />
      <StyledCheeseViewContainer>
        <CheeseHeader cheeseObject={cheeseObject} />
        <ImageSlider cheeseObject={cheeseObject} />
        <StyledDescriptionWeightContainer>
          <CheeseDescription cheeseObject={cheeseObject} />
          <CheeseWeightPortionPrice cheeseObject={cheeseObject} />
        </StyledDescriptionWeightContainer>
      </StyledCheeseViewContainer>
      <Footer />
    </div>
  );
}

const StyledCheeseViewContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledDescriptionWeightContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0rem 4rem 0rem;
  }
`;
