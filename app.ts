// Spread operator

// Here is not clear if this function accepts arguments
function addEmpty() {
  var values = Array.prototype.splice.call(arguments, [1]),
      total = 0;
console.log(values);
  for (var value of values) {
      total += value;
  }
  return total;
}

console.log("addEmpty", addEmpty());

function add(...values) { // The spread operator must be the last argument
  var total = 0;

  for (var value of values) {
      total += value;
  }
  return total;
}

add(1, 2, 3);

// Multiple parameters
function calculate(action, ...values) { // The spread operator must be the last argument
  var total = 0;

  for (var value of values) {
    switch (action) {
      case 'add':
        total += value;
        break;
      case 'substract':
        total -= value;
        break;
    }  
  }
  return total;
}

calculate('add', 2, 1, 4);

// With arrays
var source = [3, 4, 5];
var target = [1, 2, ...source, 6, 7];
console.log(target);

// Concat arrays
var list = [1, 2, 3], toAdd = [4, 5, 6];
// Before
// Array.prototype.push.apply(list, toAdd);
// Now
list.push(...toAdd);
console.log("list", list);