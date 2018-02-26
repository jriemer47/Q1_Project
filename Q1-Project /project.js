  // let clickerButton = document.getElementById("post");
  // let box = document.getElementsByClassName('form-control')
  // let onButtonClick = function() {
  //   box.textContent = "working";
  // };
  // clickerButton.addEventListener("click", onButtonClick);

  // function adding() {
  //   let slope = document.getElementById('exampleInputSlope')[0].value;
  //   console.log(slope);
  //   let rating = document.getElementById('exampleInputRating')[0].value;
  //   console.log(rating);
  //   let score = document.getElementById('exampleInputScore')[0].value;
  //   console.log(slope);
  //
  //   let total = (slope) + (rating) + (score);
  //   console.log(total);
  //
  //   document.getElementsByName('output')[0].value= total;
  //
  //
  // }

function calculateArea() {

var base = document.getElementsByName('width')[0].value;
console.log(base);
console.log("hi");
var height = document.getElementsByName('height')[0].value;
console.log(height);
var out = (base) * (height);
console.log(out);

document.getElementsByName('output')[0].value= out;

}
