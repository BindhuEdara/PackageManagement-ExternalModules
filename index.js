import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    backgroundColor: "green",
    borderColor: "yellow",
  })
);

// 2. SingleDouble style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble",
    backgroundColor: "green",
    borderColor: "yellow",
  })
);

// 3. Round style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round",
    backgroundColor: "green",
    borderColor: "yellow",
  })
);
