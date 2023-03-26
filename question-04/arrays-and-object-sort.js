const tvShows = [
  {
    title: "Planet Earth II",
    score: 9.5,
    year: 2016,
    numRatings: 5000,
  },
  {
    title: "Planet Earth",
    score: 9.4,
    year: 2006,
    numRatings: 5000,
  },
  {
    title: "Breaking Bad",
    score: 9.4,
    year: 2008,
    numRatings: 6000,
  },
  {
    title: "Band Of Brothers",
    score: 9.4,
    year: 2001,
    numRatings: 4900,
  },
  {
    title: "Chernobyl",
    score: 9.3,
    year: 2019,
    numRatings: 4900,
  },
  {
    title: "Jingle All The Way",
    score: 7.1,
    year: 1996,
    numRatings: 5000,
  },
  {
    title: "The Wire",
    score: 9.3,
    year: 2002,
    numRatings: 6000,
  },
];

const tvShowsSorted = tvShows.sort((show1, show2) => {
  if (show1.score > show2.score) return 1;
  if (show1.score < show2.score) return -1;

  if (show1.numRatings > show2.numRatings) return 1;
  if (show1.numRatings < show2.numRatings) return -1;
});

const highestRated = tvShowsSorted[tvShowsSorted.length - 1];
const secondHighestRated = tvShowsSorted[tvShowsSorted.length - 2];

console.log(`Highest Rated: ${highestRated.title}`);
console.log(`Second Highest Rated: ${secondHighestRated.title}`);
