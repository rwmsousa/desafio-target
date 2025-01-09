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
