function composePipeline(fns) {
  // code here
  console.log(fns)
  let total = null;
  for (let i = 0; i < fns.length; i++) {
    total += fns[i](fns)
  }
  return total
}

// Test Code
const add2 = x => x + 2;
const sqr = x => x * x;
const half = x => x / 2;
const pipeline = composePipeline([add2, sqr, half]);
console.log(pipeline(4));