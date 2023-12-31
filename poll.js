const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let input = Number(
      prompt(`${this.question}\n
      ${this.options.join('\n')}\n
      (Write option number)`)
    );

    if (input <= this.answers.length) {
      this.answers[input]++;
    } else {
      prompt('wrong number');
    }
    console.log(this.answers);
  },
  displayResults: function (type = 'array') {
    console.log('array' || 'string');
  },
};
