"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // [0,0,0,0]
  registerNewAnswer: function () {
    const registerInput = Number(
      prompt(`${this.question}
${this.options[0]}
${this.options[1]}
${this.options[2]}
${this.options[3]}
(write your option number)`)
    );
    if (registerInput >= 0 && registerInput <= 3) {
      this.answers[registerInput] += 1;
    } else {
      console.log("Wrong Number!");
    }

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));