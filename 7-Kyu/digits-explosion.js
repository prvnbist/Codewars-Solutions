//////////////////////////////////
// Vanilla Js

function explodes(s) {
    let result = [];
    for (let i = 0; i < s; i++)
        for (let j = 0; j < i; j++)
            result.push(i);
    return result.join("");
}