"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // [0,0,0,0]
  registerNewAnswer: function () {
    console.log(`${this.question}
${this.options[0]}
${this.options[1]}
${this.options[2]}
${this.options[3]}  
`);
    const registerInput = Number(prompt("(write your option number)"));
    if (registerInput >= 0 && registerInput <= 3) {
      this.answers[registerInput] += 1;
    } else {
      console.log("Wrong Number!");
    }
    console.log(this.answers);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
