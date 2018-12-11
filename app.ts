// Chapter 2.4 Let & Const
var container = document.getElementById('container');

for (var x = 0; x <= 5; x++) {
  let counter = x;
}

// counter is out of scope
console.log(counter);