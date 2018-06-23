let digital_root = num => {
    if ((num + '').length > 1) {
        let sum = (num + '').split('').map(i => Number(i)).reduce((a, b) => a + b);
        return ((sum + '').length > 1) ? digital_root(sum) : sum;
    } else
        return Number(num);
}