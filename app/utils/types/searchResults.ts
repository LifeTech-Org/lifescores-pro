import { TMatch } from "./competition";

export type SearchResults = {
  team: {
    title: string;
    img: {
      src: string;
      alt: string;
    };
  }[];
  competition: {
    title: string;
    img: {
      src: string;
      alt: string;
    };
  }[];
  fixtures: TMatch[];
};
