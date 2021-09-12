const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const currentYear = new Date();

// Are some people above the age of 19?
console.log(
  people.some((individual) => {
    return currentYear.getFullYear() - individual.year > 19;
  })
);

// Is everyone above the age of 19?
console.log(
  people.every((individual) => {
    return currentYear.getFullYear() - individual.year > 19;
  })
);

//Find the comment with the ID of 823423
console.log(
  comments.find((comment) => {
    if (comment.id === 823423) {
      return comment;
    }
  })
);

const index = comments.findIndex((comment) => {
  if (comment.id === 823423) {
    return comment;
  }
});

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log(newComments);
