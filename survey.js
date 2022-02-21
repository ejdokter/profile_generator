const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  let answers = []
  answers.push(answer)
  rl.question('What is an activity you like doing? ', (answer) => {
    answers.push(answer)
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer)
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        answers.push(answer)
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answers.push(answer)
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers.push(answer)
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answers.push(answer)
              console.log(`My name is ${answers[0]}, I enjoy ${answers[1]} while listening to ${answers[2]}. My favourite meal is ${answers[4]} at ${answers[3]}. My favourite sport is ${answers[5]} and if I had a superpower it would be ${answers[6]} `);
              rl.close()
            })
          })
        })
      })
    });
  });
})
