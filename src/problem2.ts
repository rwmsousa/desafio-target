import * as readline from 'readline';

function isFibonacci(n: number): boolean {
  let a = 0, b = 1;
  while (b < n) {
    [a, b] = [b, a + b];
  }
  return b === n || n === 0;
}

export function mainFibonacci(): Promise<void> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter a number: ', (answer) => {
      const number = parseInt(answer, 10);
      if (isFibonacci(number)) {
        console.log(`The number ${number} belongs to the Fibonacci sequence.`);
      } else {
        console.log(`The number ${number} does not belong to the Fibonacci sequence.`);
      }
      rl.close();
      resolve();
    });
  });
}


