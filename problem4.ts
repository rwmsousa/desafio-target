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
