//////////////////////////////////
// Vanilla Js

function sortArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                if (array[j] % 2 != 0 && array[i] % 2 != 0) {
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
        }
    }
    return array;
}