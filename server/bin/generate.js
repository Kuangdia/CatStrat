const num = 10;
function generateQuerySyntax(num) {
  let res ="";
  for (let i = 1; i < num; i++) {
    res += `($${i}), ` //9
  }
  res += `($${num})`;
  return res;
}

console.log(generateQuerySyntax(num));