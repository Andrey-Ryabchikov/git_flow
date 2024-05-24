import readlineSync from 'readline-sync';
import greet from './cli.js';

const runGame = (gameRules, getQuestionAndAnswer) => {
  const userName = greet();
  console.log(gameRules);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
