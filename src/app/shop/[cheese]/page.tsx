"use client";
import Header from "@/components/atom/header/header";
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
      <h1>{cheeseObject?.name}</h1>
    </div>
  );
}
