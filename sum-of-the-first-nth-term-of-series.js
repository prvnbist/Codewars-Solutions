//////////////////////////////////
// Vanilla Js

function SeriesSum(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += 1 / (1 + 3 * i);
    }
    return sum.toPrecision(3);
}
