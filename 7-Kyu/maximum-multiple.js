let maxMultiple = (divisor, bound) => {
    let max = 1;
    for (let i = 1; i <= bound; i++) {
        max = divisor * i;
        if (max > bound)
            break;
    }
    return divisor == 1 ? max : max - divisor;
}

