import { calculateSum } from './problem1';
import { mainFibonacci } from './problem2';
import { main as mainBilling } from './problem3';
import { mainPercentage } from './problem4';
import { mainReverse } from './problem5';

async function main(): Promise<void> {
  console.log('Running Problem 1: Cálculo da Soma');
  calculateSum();
  console.log('\nRunning Problem 2: Sequência de Fibonacci');
  await mainFibonacci();
  console.log('\nRunning Problem 3: Faturamento Diário');
  mainBilling();
  console.log('\nRunning Problem 4: Percentual de Faturamento por Estado');
  mainPercentage();
  console.log('\nRunning Problem 5: Inversão de String');
  mainReverse();
}

main();
