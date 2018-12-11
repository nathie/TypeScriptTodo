// Chapter 2.5 For of loops
var array = [
  "Pick up drycleaning", 
  "Clean Batcave", 
  "Save Gotham"
];

for (var index in array) {
  var value = array[index];
  console.log(`${index}: ${value}`);
}