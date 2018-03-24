//////////////////////////////////
// Vanilla Js

function solution(str) {
	var result = [];
	for (var i = str.length; i >= 0; i--) result.push(str[i]);
	return result.join('');
}