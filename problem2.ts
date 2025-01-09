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
