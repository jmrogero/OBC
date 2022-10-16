//FACTORIAL BREAK
let num = 10;
let fact = num;
while (num > 1) {
  num--;
  fact *= num;
  console.log(fact);
  if (fact > 1814400) {
    break;
  }
}