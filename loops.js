function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {

do {
  array.pop();

  console.log(array)
} while (array.length > 0 && maybeTrue());

return array;
}


function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if (i===1) {
  //superheroines.push("wonderwoman");
  array.push(`I am 1 strange loop.`);
  //console.log( `I am ${i}  strange loop.`);
  }
 else {
  array.push(`I am ${i}  strange loops.`);
  //console.log( `I am ${i} strange loops.`);
  }
}
 //return 'done';
  return array;
}

function whileLoop(countdown) {

while (countdown > 0) {
  console.log(--countdown)
}

return 'done';
}
