let count = n => {
    let fact = 1;
    for (let i = 2; i <= n; i++)
        fact += Math.log10(i);
    return Math.floor(fact);
};