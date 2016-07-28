var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i < scores.length; i++) {
  scores.sort(function(a, b){return a-b});
}

  console.log(scores);

var lowestScore = scores.shift();

console.log("the lowest score is " + lowestScore);


var highestScore = scores.pop();

console.log("the highest score is " + highestScore);


var countingScores = scores.push();
/*
switch (true) {
  case 1: [i] = 60;
  console.log("These are the failing grades.")
  break;

  case 2: countingScores < 70;
  console.log("These are the D grades.")
  break;

  case 3: countingScores < 80;
  console.log("These are the C grades.")
  break;

  case 4: countingScores < 90;
  console.log("These are the B grades.")
  break;

  case 5: countingScores < 100;
  console.log("These are the A grades.")
  break;
}
*/
var dataset = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87], count = {}

dataset.forEach(function(el){
    count[el] = count[el] + 1 || 1
});

console.log(count)










/*
Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?

*/