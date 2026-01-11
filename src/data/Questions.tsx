// components/Questions.tsx

export type Difficulty = "easy" | "hard";

export interface Question {
  text: string;
  answer: string;
  difficulty: Difficulty;
}

export const questions: Question[] = [
  // easy 
    { text: "A plant hung in doorways, under which people kiss.", answer: "Mistletoe", difficulty: "easy" },
    { text: "A red-nosed reindeer leading Santa's sleigh.", answer: "Rudolph", difficulty: "easy" },
    { text: "A figure who delivers presents to children on Christmas Eve.", answer: "Santa Claus", difficulty: "easy" },
    { text: "A sweet treat shaped like a cane, often red and white.", answer: "Candy Cane", difficulty: "easy" },
    { text: "A decorative tree adorned with lights and ornaments.", answer: "Christmas Tree", difficulty: "easy" },
    { text: "A stocking hung by the fireplace for Santa to fill.", answer: "Christmas Stocking", difficulty: "easy" },
    { text: "A festive song sung during the holiday season.", answer: "Christmas Carol", difficulty: "easy" },
    { text: "A traditional Christmas dessert made of dried fruits and nuts.", answer: "Fruitcake", difficulty: "easy" },
    { text: "A holiday figure who is said to bring gifts to children in some European countries.", answer: "Krampus", difficulty: "easy" },
    { text: "A festive beverage made with milk, sugar, and spices.", answer: "Eggnog", difficulty: "easy" }, 

  // hard
  { text: "What do we call the tradition of singing christmas songs?", answer: "Caroling", difficulty: "hard" },
  { text: "What do you think is the most popular christmas song in the world?", answer: "White Christmas", difficulty: "hard" },
  { text: "What was the original colour of Santa's coat?", answer: "Green", difficulty: "hard" },
  { text: "Which christmas carol is sang in over 300 languages?", answer: "Silent Night", difficulty: "hard" },
  { text: "Where does Santa leave the presents in the UK?", answer: "In the stockings", difficulty: "hard" },
  { text: "What do you call a cardboard candy-shaped box with a gift inside that requires two people to open?", answer: "Christmas cracker", difficulty: "hard" },
  { text: "How do you call the second day of christmas?", answer: "Boxing Day", difficulty: "hard" },
  { text: "In which country did the tradition of putting up a christmas tree originate?", answer: "Germany", difficulty: "hard" },
  { text: "Which country is the largest exporter of christmas trees?", answer: "Canada", difficulty: "hard" },
  { text: "Which country started the tradition of exchanging gifts?", answer: "Italy", difficulty: "hard" },
];
