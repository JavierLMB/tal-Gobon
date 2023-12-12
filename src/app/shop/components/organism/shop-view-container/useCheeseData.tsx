export type CheeseDataType = {
  id: number;
  imagesSmall: {
    image1Small: any;
    image2Small: any;
    image3Small: any;
  };
  imagesBig: {
    image1Big: any;
    image2Big: any;
    image3Big: any;
  };
  name: string;
  desc: string;
  animal:
    | "Cow"
    | "Sheep"
    | "Sheep/Goat"
    | "Cow/Goat"
    | "Cow/Goat/Buffalo"
    | "Cow/Sheep/Goat"
    | "Sheep/Cow/Goat/Buffalo";
  country: string;
  pricePerKg: number;
};

export const cheesesData: CheeseDataType[] = [
  {
    id: 1,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/1Brie/BrieCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/1Brie/BrieCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/1Brie/BrieCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/1Brie/BrieCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/1Brie/BrieCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/1Brie/BrieCheese3.jpg",
    },
    name: "Brie",
    desc: "A soft, creamy French cheese known for its mild flavor and bloomy rind.",
    animal: "Cow",
    country: "France",
    pricePerKg: 20.99,
  },
  {
    id: 2,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/2Cheddar/CheddarCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/2Cheddar/CheddarCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/2Cheddar/CheddarCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/2Cheddar/CheddarCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/2Cheddar/CheddarCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/2Cheddar/CheddarCheese3.jpg",
    },
    name: "Cheddar",
    desc: `A firm, yellow cheese originating from England, with a rich, sharp flavor that intensifies with age.`,
    animal: "Cow",
    country: "United Kingdom",
    pricePerKg: 15.5,
  },
  {
    id: 3,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/3Gouda/GoudaCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/3Gouda/GoudaCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/3Gouda/GoudaCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/3Gouda/GoudaCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/3Gouda/GoudaCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/3Gouda/GoudaCheese3.jpg",
    },
    name: "Gouda",
    desc: `A mild, yellow cheese made from cow's milk, originating in the Netherlands.`,
    animal: "Cow",
    country: "Netherlands",
    pricePerKg: 18.75,
  },
  {
    id: 4,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/4Feta/FetaCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/4Feta/FetaCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/4Feta/FetaCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/4Feta/FetaCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/4Feta/FetaCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/4Feta/FetaCheese3.jpg",
    },
    name: "Feta",
    desc: "A crumbly Greek cheese made from sheep or goat milk, with a tangy flavor.",
    animal: "Sheep/Goat",
    country: "Greece",
    pricePerKg: 14.25,
  },
  {
    id: 5,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/5Manchego/ManchegoCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/5Manchego/ManchegoCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/5Manchego/ManchegoCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/5Manchego/ManchegoCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/5Manchego/ManchegoCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/5Manchego/ManchegoCheese3.jpg",
    },
    name: "Manchego",
    desc: `A Spanish cheese made from sheep's milk, known for its distinctive flavor and texture.`,
    animal: "Sheep",
    country: "Spain",
    pricePerKg: 21.5,
  },
  {
    id: 6,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/6Gruyere/GruyereCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/6Gruyere/GruyereCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/6Gruyere/GruyereCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/6Gruyere/GruyereCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/6Gruyere/GruyereCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/6Gruyere/GruyereCheese3.jpg",
    },
    name: "Gruyere",
    desc: "A Swiss cheese known for its sweet and nutty flavor, often used in fondue.",
    animal: "Cow",
    country: "Switzerland",
    pricePerKg: 23.99,
  },
  {
    id: 7,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/7Parmesan/ParmesanCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/7Parmesan/ParmesanCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/7Parmesan/ParmesanCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/7Parmesan/ParmesanCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/7Parmesan/ParmesanCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/7Parmesan/ParmesanCheese3.jpg",
    },
    name: "Parmesan",
    desc: "A hard, granular cheese from Italy, usually aged and grated over pasta dishes.",
    animal: "Cow",
    country: "Italy",
    pricePerKg: 27.0,
  },
  {
    id: 8,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/8Blue/BlueCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/8Blue/BlueCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/8Blue/BlueCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/8Blue/BlueCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/8Blue/BlueCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/8Blue/BlueCheese3.jpg",
    },
    name: "Blue Cheese",
    desc: "A type of cheese that has been ripened with cultures of the mold Penicillium.",
    animal: "Cow/Sheep/Goat",
    country: "Italy",
    pricePerKg: 19.99,
  },
  {
    id: 9,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/9Camembert/CamembertCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/9Camembert/CamembertCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/9Camembert/CamembertCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/9Camembert/CamembertCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/9Camembert/CamembertCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/9Camembert/CamembertCheese3.jpg",
    },
    name: "Camembert",
    desc: `A moist, creamy, surface-ripened cow's milk cheese.`,
    animal: "Cow",
    country: "France",
    pricePerKg: 22.45,
  },
  {
    id: 10,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/10Mozzarella/MozzarellaCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/10Mozzarella/MozzarellaCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/10Mozzarella/MozzarellaCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/10Mozzarella/MozzarellaCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/10Mozzarella/MozzarellaCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/10Mozzarella/MozzarellaCheese3.jpg",
    },
    name: "Mozzarella",
    desc: "A soft, fresh cheese made from cow, goat, or buffalo milk.",
    animal: "Cow/Goat/Buffalo",
    country: "Italy",
    pricePerKg: 16.8,
  },
  {
    id: 11,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/11Havarti/HavartiCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/11Havarti/HavartiCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/11Havarti/HavartiCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/11Havarti/HavartiCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/11Havarti/HavartiCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/11Havarti/HavartiCheese3.jpg",
    },
    name: "Havarti",
    desc: "A semi-soft Danish cheese with a creamy texture and a mild, buttery flavor.",
    animal: "Cow",
    country: "Denmark",
    pricePerKg: 19.25,
  },
  {
    id: 12,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/12Provolone/ProvoloneCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/12Provolone/ProvoloneCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/12Provolone/ProvoloneCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/12Provolone/ProvoloneCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/12Provolone/ProvoloneCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/12Provolone/ProvoloneCheese3.jpg",
    },
    name: "Provolone",
    desc: `An Italian semi-hard cheese made from cow's milk.`,
    animal: "Cow",
    country: "Italy",
    pricePerKg: 17.99,
  },
  {
    id: 13,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/13Roquefort/RoquefortCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/13Roquefort/RoquefortCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/13Roquefort/RoquefortCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/13Roquefort/RoquefortCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/13Roquefort/RoquefortCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/13Roquefort/RoquefortCheese3.jpg",
    },
    name: "Roquefort",
    desc: "A French blue cheese made from sheep milk, characterized by its strong, tangy flavor.",
    animal: "Sheep",
    country: "France",
    pricePerKg: 24.99,
  },
  {
    id: 14,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/14Emmental/EmmentalCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/14Emmental/EmmentalCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/14Emmental/EmmentalCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/14Emmental/EmmentalCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/14Emmental/EmmentalCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/14Emmental/EmmentalCheese3.jpg",
    },
    name: "Emmental",
    desc: "A Swiss yellow cheese, known for its characteristic holes and sweet, nutty flavor.",
    animal: "Cow",
    country: "Switzerland",
    pricePerKg: 21.2,
  },
  {
    id: 15,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/15MontereyJack/MontereyJackCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/15MontereyJack/MontereyJackCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/15MontereyJack/MontereyJackCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/15MontereyJack/MontereyJackCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/15MontereyJack/MontereyJackCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/15MontereyJack/MontereyJackCheese3.jpg",
    },
    name: "Monterey Jack",
    desc: "An American semi-hard cheese, mild in flavor and popular in Mexican cuisine.",
    animal: "Cow",
    country: "United States",
    pricePerKg: 14.99,
  },
  {
    id: 16,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/16PepperJack/PepperJackCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/16PepperJack/PepperJackCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/16PepperJack/PepperJackCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/16PepperJack/PepperJackCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/16PepperJack/PepperJackCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/16PepperJack/PepperJackCheese3.jpg",
    },
    name: "Pepper Jack",
    desc: "A variation of Monterey Jack cheese spiced with jalapeño peppers.",
    animal: "Cow",
    country: "United States",
    pricePerKg: 16.75,
  },
  {
    id: 17,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/17Fontina/FontinaCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/17Fontina/FontinaCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/17Fontina/FontinaCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/17Fontina/FontinaCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/17Fontina/FontinaCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/17Fontina/FontinaCheese3.jpg",
    },
    name: "Fontina",
    desc: "An Italian cow's milk cheese, known for its earthy and nutty flavor.",
    animal: "Cow",
    country: "Italy",
    pricePerKg: 25.4,
  },
  {
    id: 18,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/18Swiss/SwissCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/18Swiss/SwissCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/18Swiss/SwissCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/18Swiss/SwissCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/18Swiss/SwissCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/18Swiss/SwissCheese3.jpg",
    },
    name: "Swiss Cheese",
    desc: "A mild, nutty-flavored cheese with distinctive holes, originating from Switzerland.",
    animal: "Cow",
    country: "Switzerland",
    pricePerKg: 22.5,
  },
  {
    id: 19,
    imagesSmall: {
      image1Small:
        "/previewCardCheeseImages/small/19Limburger/LimburgerCheese1.jpg",
      image2Small:
        "/previewCardCheeseImages/small/19Limburger/LimburgerCheese2.jpg",
      image3Small:
        "/previewCardCheeseImages/small/19Limburger/LimburgerCheese3.jpg",
    },
    imagesBig: {
      image1Big:
        "/previewCardCheeseImages/big/19Limburger/LimburgerCheese1.jpg",
      image2Big:
        "/previewCardCheeseImages/big/19Limburger/LimburgerCheese2.jpg",
      image3Big:
        "/previewCardCheeseImages/big/19Limburger/LimburgerCheese3.jpg",
    },
    name: "Limburger",
    desc: "A cheese known for its strong odor and creamy texture, originally from Belgium.",
    animal: "Cow",
    country: "Belgium",
    pricePerKg: 18.95,
  },
  {
    id: 20,
    imagesSmall: {
      image1Small: "/previewCardCheeseImages/small/20Asiago/AsiagoCheese1.jpg",
      image2Small: "/previewCardCheeseImages/small/20Asiago/AsiagoCheese2.jpg",
      image3Small: "/previewCardCheeseImages/small/20Asiago/AsiagoCheese3.jpg",
    },
    imagesBig: {
      image1Big: "/previewCardCheeseImages/big/20Asiago/AsiagoCheese1.jpg",
      image2Big: "/previewCardCheeseImages/big/20Asiago/AsiagoCheese2.jpg",
      image3Big: "/previewCardCheeseImages/big/20Asiago/AsiagoCheese3.jpg",
    },
    name: "Asiago",
    desc: "An Italian cheese, produced using cow, sheep, or goat milk, with a firm texture.",
    animal: "Cow/Sheep/Goat",
    country: "Italy",
    pricePerKg: 20.6,
  },
];
