import * as readline from 'readline';

function reverseString(s: string): string {
  let reversedS = '';
  for (const char of s) {
    reversedS = char + reversedS;
  }
  return reversedS;
}

export function mainReverse(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a string: ', (answer) => {
    console.log(`Reversed string: ${reverseString(answer)}`);
    rl.close();
  });
}


