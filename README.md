# Desafio Target

Este projeto contém soluções para um conjunto de problemas propostos em um processo seletivo. As soluções foram implementadas em TypeScript.

## Problemas

### 1. Cálculo da Soma

Dado o trecho de código:
```typescript
function calculateSum(): void {
    const INDEX = 13;
    let SUM = 0;
    let K = 0;

    while (K < INDEX) {
        K += 1;
        SUM += K;
    }

    console.log(SUM);
}

calculateSum();
```
Ao final do processamento, o valor da variável `SUM` será 91.

### 2. Sequência de Fibonacci

Dado um número, o programa verifica se ele pertence à sequência de Fibonacci.
```typescript
function isFibonacci(n: number): boolean {
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n || n === 0;
}

function mainFibonacci(): void {
    const number = parseInt(prompt("Enter a number: ") || "0", 10);
    if (isFibonacci(number)) {
        console.log(`The number ${number} belongs to the Fibonacci sequence.`);
    } else {
        console.log(`The number ${number} does not belong to the Fibonacci sequence.`);
    }
}

mainFibonacci();
```

### 3. Faturamento Diário

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, o programa calcula:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

```typescript
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

function main(): void {
    const data: Billing[] = JSON.parse(fs.readFileSync('billing.json', 'utf-8'));

    const [minValue, maxValue, daysAboveAverage] = calculateBilling(data);
    console.log(`Lowest billing value: ${minValue}`);
    console.log(`Highest billing value: ${maxValue}`);
    console.log(`Days with billing above average: ${daysAboveAverage}`);
}

main();
```

### 4. Percentual de Faturamento por Estado

Dado o valor de faturamento mensal de uma distribuidora detalhado por estado, o programa calcula o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

```typescript
interface Billing {
    [state: string]: number;
}

function calculatePercentage(billing: Billing): { [state: string]: number } {
    const total = Object.values(billing).reduce((acc, val) => acc + val, 0);
    const percentages = Object.fromEntries(
        Object.entries(billing).map(([state, value]) => [state, (value / total) * 100])
    );
    return percentages;
}

function mainPercentage(): void {
    const billing: Billing = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Others": 19849.53
    };

    const percentages = calculatePercentage(billing);
    for (const [state, percentage] of Object.entries(percentages)) {
        console.log(`${state}: ${percentage.toFixed(2)}%`);
    }
}

mainPercentage();
```

### 5. Inversão de String

O programa inverte os caracteres de uma string sem usar funções prontas.

```typescript
function reverseString(s: string): string {
    let reversedS = "";
    for (const char of s) {
        reversedS = char + reversedS;
    }
    return reversedS;
}

function mainReverse(): void {
    const string = prompt("Enter a string: ") || "";
    console.log(`Reversed string: ${reverseString(string)}`);
}

mainReverse();
```

## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Execute os scripts conforme necessário:
   ```bash
   npx ts-node problem1.ts
   npx ts-node problem2.ts
   npx ts-node problem3.ts
   npx ts-node problem4.ts
   npx ts-node problem5.ts
   ```

## Estrutura do Projeto

- `problem1.ts`: Solução para o problema 1.
- `problem2.ts`: Solução para o problema 2.
- `problem3.ts`: Solução para o problema 3.
- `problem4.ts`: Solução para o problema 4.
- `problem5.ts`: Solução para o problema 5.
- `package.json`: Arquivo de configuração do projeto.
- `.gitignore`: Arquivo para ignorar arquivos desnecessários no Git.

## Licença

Este projeto está licenciado sob a licença ISC.
