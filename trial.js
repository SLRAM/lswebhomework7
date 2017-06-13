
function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
if (num%3==0 && num%5==0) {
  return 'fizzbuzz';
} else if (num%3==0) {
  return 'fizz';
} else if (num%5==0) {
  return 'buzz';
} else {
  return num;
}
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if(num==1 ||num==0){
    return false 
  } else {
    for(var i=2, i num, i=+1){
      if (num%i==0 && i==num) {
        return true;
      } else {
        return false;
      }
    }
  }
}
var hello=isPrime(7)
console.log(hello);



module.exports = {
  fizzBuzz: fizzBuzz,
  isPrime: isPrime
};