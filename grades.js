var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i < scores.length; i++) {
  scores.sort(function(a, b){return a-b});
}

  console.log(scores);

var lowestScore = scores.shift();

console.log("the lowest score is " + lowestScore);


var highestScore = scores.pop();

console.log("the highest score is " + highestScore);

grades = [];
f = 0;
d = 0;
c = 0;
b = 0;
a = 0;

for (var i = 0; i < scores.length; i++) {
  switch(true) {
    case(scores[i] <= 60):
    f++;
    break;

    case(scores[i] <= 70):
    d++;
    break;

    case(scores[i] <= 80):
    c++;
    break;

    case(scores[i] <= 90):
    b++;
    break;

    case(scores[i] <= 100):
    a++;
    break;
  }

}

console.log("There are " + a + " A grades.")
console.log("There are " + b + " B grades.")
console.log("There are " + c + " C grades.")
console.log("There are " + d + " D grades.")
console.log("There are " + f + " F grades.")



