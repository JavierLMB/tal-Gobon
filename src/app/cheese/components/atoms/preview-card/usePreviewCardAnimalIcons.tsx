import { GiBuffaloHead, GiCow, GiSheep, GiGoat } from "react-icons/gi";

export const animalImages = {
  Cow: [GiCow],
  Sheep: [GiSheep],
  "Sheep/Goat": [GiSheep, GiGoat],
  "Cow/Goat": [GiCow, GiGoat],
  "Cow/Sheep/Goat": [GiCow, GiSheep, GiGoat],
  "Cow/Goat/Buffalo": [GiCow, GiGoat, GiBuffaloHead],
  "Sheep/Cow/Goat/Buffalo": [GiSheep, GiCow, GiGoat, GiBuffaloHead],
};
