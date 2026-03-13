let memo = {};
function power(base, exp) {
  let neg = false;
  if (exp < 0){
    neg = true;
  }

  let exponent = Math.abs(exp);
  let product = 1;
  
  for(let i = 1; i<= exponent; i++){
    product *= base;
  }
  
  if(neg == true){
    product = 1/product;
  }
  
  return product;
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));