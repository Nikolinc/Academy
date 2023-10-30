import item_one from "./asset/item_one.jpg";
import item_two from "./asset/item_two.jpg";
import item_three from "./asset/item_three.jpg";
import item_four from "./asset/item_four.jpg";
import item_five from "./asset/item_five.jpg";
import item_six from "./asset/item_six.jpg";
import item_seven from "./asset/item_seven.jpg";
import item_eight from "./asset/item_eight.jpg";
import { ISoundList, category } from "../../types/soundlist";

export const SoundList: ISoundList[] = [
  {
    key: "1",
    title: "Fundamentals of investment",
    image: item_one,
    category: category.NewPlaylist,
  },
  {
    key: "2",
    title: "Fundamentals of investment",
    image: item_two,
    category: category.NewPlaylist,
  },
  {
    key: "3",
    title: "Fundamentals of investment",
    image: item_three,
    category: category.NewPlaylist,
  },
  {
    key: "4",
    title: "Fundamentals of investment",
    image: item_four,
    category: category.NewPlaylist,
  },
  {
    key: "5",
    title: "Fundamentals of investment",
    image: item_five,
    category: category.Trending,
  },
  {
    key: "6",
    title: "Fundamentals of investment",
    image: item_six,
    category: category.Trending,
  },
  {
    key: "7",
    title: "Fundamentals of investment",
    image: item_seven,
    category: category.Trending,
  },
  {
    key: "8",
    title: "Fundamentals of investment",
    image: item_eight,
    category: category.Trending,
  },
];
