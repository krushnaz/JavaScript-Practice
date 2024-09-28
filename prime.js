// function showPrime(n) {
//     nextPrime: for (let i = 0; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0)
//                 continue nextPrime;
//         }
//         if(i == 0 || i == 1 || i == 2){
//             continue
//         }
//         console.log(i)
//     }
// }

// showPrime(10);

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
    //   alert(i);  // a prime
    console.log(i)
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  showPrimes(11)
