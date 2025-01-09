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
