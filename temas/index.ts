import { labels } from "../src/Labels";

export type Tema = {
  title: string;
  tags: string[];
  fileName: string;
};

export const temas: Tema[] = [
  {
    title: "Números Complejos",
    tags: [labels.cdivv, labels.mat],
    fileName: "Complejos"
  },
  
];
