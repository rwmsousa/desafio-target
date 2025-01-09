import * as fs from 'fs';

interface Billing {
    day: number;
    value: number;
}

function calculateBilling(data: Billing[]): [number, number, number] {
  const values = data.filter(day => day.value > 0).map(day => day.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const monthlyAverage = values.reduce((acc, val) => acc + val, 0) / values.length;
  const daysAboveAverage = values.filter(value => value > monthlyAverage).length;

  return [minValue, maxValue, daysAboveAverage];
}

export function main(): void {
  const data: Billing[] = JSON.parse(fs.readFileSync('billing.json', 'utf-8'));

  const [minValue, maxValue, daysAboveAverage] = calculateBilling(data);
  console.log(`Lowest billing value: ${minValue}`);
  console.log(`Highest billing value: ${maxValue}`);
  console.log(`Days with billing above average: ${daysAboveAverage}`);
}


