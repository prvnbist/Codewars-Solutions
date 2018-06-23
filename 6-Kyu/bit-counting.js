//////////////////////////////////
// Vanilla Js

// Refactored
var countBits = n => n.toString(2).replace(/[0]/g, "").length;

// Old Code
function countBits(n) {
	var num = (n >>> 0).toString(2),
		count = 0;
	for (var i = 0; i < num.length; i++)
		if (num.charAt(i) === '1') count++;
	return count;
};