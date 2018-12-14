// Chapter 2.6 Lambda Expressions or Arrow functions

var container = document.getElementById('container');

function Counter(el) {

  this.count = 0;

  el.innerHTML = this.count;

  // el.addEventListener('click', 
  //   function () {
  //       this.count += 1; // 'this' refers to the global browser scope not to the one inside the function
  //       el.innerHTML = this.count;
  //   })

  // An old solution is to create a reference to the function this and access it inside  
  // let that = this;

  // el.addEventListener('click', 
  //   function () {
  //       that.count += 1; 
  //       el.innerHTML = that.count;
  //   })

  // With Arrow functions
  
  el.addEventListener('click', () => {
    this.count += 1; // Now 'this' references to the Counter function
    el.innerHTML = this.count;
  })
}

new Counter(container);

var filtered = [1, 2, 3].filter(x => x > 1);
console.log(filtered);