let myFF = (n) => {
  let res = BigInt(1); // the BigInt declartion function is case sensetive.	
  for(let i = n; i > 1; i--) {
    res *= BigInt(i);
  }
  return res.toString(); // converting BigInt type returned result value to string wo/n
}
console.log(myFF(n));
