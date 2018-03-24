//////////////////////////////////
// Vanilla Js

function arithmeticSequenceElements(a, r, n) {
    let result = [];
    for (let i = 0; i < n; i++)
        result.push(a + r * i);
    return result.join(', ').toString('');
}