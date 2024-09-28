/**
 * @param {number} n
 * @return {Function} counter
 */
var count = []
var createCounter = function(n) {
    
    return function() {
        lo(count.push(n))
        n++;
    };
};


  const counter = createCounter(10)
  counter() // 10
  counter() // 11
  counter() // 12
