function min(a, b) {
	return Math.min(a, b);
}

console.log(min(0, 10));

console.log(min(0, -10));

if (2 == 3)
	console.log(true);
else 
	console.log(false);
var string = "hello";
console.log(string[3]);
console.log(string.charAt(3));

function argumentCounter() {
	console.log("You gave me " + arguments.length + " arguments.");
}
argumentCounter(1, 2, 3, 4, 5);
var journal = [];

function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza",
         "running", "television");
console.log(journal);
console.log(Math);

console.log(Math.floor(Math.random() * 20));

// Methods are functions that live in properties and (usually) act on the value they are a property of.
// ============================
function greaterThan(n) {
	return function(m) {
		return m > n;
	}
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(9+10));
// ============================
function noisy(f) {
	return function (arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	};
}
noisy(Boolean)(1);
// ============================
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
})
console.log(sum);

numbers.forEach(function(number){
	console.log(number);
});
// ===========================

function unless(test, then) {
  if (!test) 
  	then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(5, function(n) {
	unless(n % 2, function() {
		console.log(n, "is even")
	});
});
// ============================

// Summarizing with reduce

// Another common pattern of computation on arrays is computing a single value from them. 
// Our recurring example, summing a collection of numbers, is an instance of this. 
// Another example would be finding the person with the earliest year of birth in the data set.

// The higher-order operation that represents this pattern is called reduce (or sometimes fold). 
// You can think of it as folding up the array, one element at a time. When summing numbers, you’d start 
// with the number zero and, for each element, combine it with the current sum by adding the two.

// The parameters to the reduce function are, apart from the array, a combining function and a start value. 
// This function is a little less straightforward than filter and map, so pay close attention.

// function reduce(array, combine, start) {
//   var current = start;
//   for (var i = 0; i < array.length; i++)
//     current = combine(current, array[i]);
//   return current;
// }

// console.log(reduce([1, 2, 3, 4], function(a, b) {
//   return a + b;
// }, 0));
// // → 10

// The standard array method reduce, which of course corresponds to this function, has an added convenience. 
// If your array contains at least one element, you are allowed to leave off the start argument. 
// The method will take the first element of the array as its start value and start reducing at the second element.

// To use reduce to find my most ancient known ancestor, we can write something like this:

// console.log(ancestry.reduce(function(min, cur) {
//   if (cur.born < min.born) return cur;
//   else return min;
// }));
// // → {name: "Pauwels van Haverbeke", born: 1535, …}

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce(function(array1, array2){
  return array1.concat(array2);
}))
// → [1, 2, 3, 4, 5, 6]
