const addition = (...args) => {
  let sum = 0;
  for (let n of args) {
sum=sum+n; 
  }
  return sum;
};
module.exports=addition;
