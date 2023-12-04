"use client";
import styled from "styled-components";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import { cheesesData } from "../components/organism/shop-view-container/useCheeseData";
import ImageSlider from "./components/atom/image-slider/imageSlider";
import CheeseDescription from "./components/atom/cheese-description/cheeseDescription";
import CheeseWeightPortionPrice from "./components/molecule/cheese-weight-portion--price/cheeseWeightPortionPrice";

type CheeseObjectType = {
  name: string;
  desc: string;
  country: string;
  animal: string;
  pricePerKg: number;
  images: { [key: string]: string };
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
        <StyledTitle>{cheeseObject?.name}</StyledTitle>
        <ImageSlider cheeseObject={cheeseObject} />
        <CheeseDescription cheeseObject={cheeseObject} />
        <CheeseWeightPortionPrice cheeseObject={cheeseObject} />
      </StyledCheeseViewContainer>
      <Footer />
    </div>
  );
}

const StyledCheeseViewContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h2`
  padding: 0rem 1rem;
  font-size: ${({ theme }) => theme.sizes.header2Font};
  text-decoration: underline;
`;
