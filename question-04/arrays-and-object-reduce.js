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

const highestRated = tvShows.reduce((prev, current) => {
  if (current.score > prev.score) {
    return current;
  } else if (current.score === prev.score) {
    return current.numRatings > prev.numRatings ? current : prev;
  } else {
    return prev;
  }
});

const secondHighestRated = tvShows.reduce(
  (prev, current) => {
    if (current.score < highestRated.score && current.score > prev.score) {
      return current;
    } else if (current.score === prev.score) {
      return current.numRatings > prev.numRatings ? current : prev;
    } else {
      return prev;
    }
  },
  { score: -Infinity, numRatings: -Infinity }
);

console.log(`Highest rated TV show: ${highestRated.title}`);
console.log(`Second highest rated TV show: ${secondHighestRated.title}`);
