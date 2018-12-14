/* 
Destructuring: is the ability to assign values 
to multiple variables from a single object with 
a single statement.
*/

var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;

// To switch values
var a = 1, b = 5;

//Normally you need a temp variable to make the switch
// with ES5
[a, b] = [b, a];
console.log(`A = ${a} B = ${b}`);

// In case of object the values are assigned by the
// name of the property

// var todo = {
//   id: 123,
//   title: "Pick up",
//   completed: false
// }

// var {id, title, completed } = todo;

// Or creating a function that returns he values
function getTodo() {
  var todo = {
    id: 123,
    title: "Pick up",
    completed: false
  }

  return todo;
}

var {id, title, completed } = getTodo();
console.log(id, title, completed);

// Reduce parameters sent to a function
function countdown({
  initial,
  final = 0,
  interval,
  initial: current
}) {

    var current = initial;

    while (current > final) {
        current -= interval;
        console.log("current", current);
    }

}

var options =  {initial: 10, final: 5, interval: 1};
countdown(options);
