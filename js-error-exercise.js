function calculateExecutionTime(func) {
    return function (...args) {
      const start = performance.now();
      const result = func.apply(this, args);
      const end = performance.now();
      const executionTime = end - start;
  
      console.log(`Function '${func.name}' took ${executionTime} milliseconds to execute.`);
      
      return result;
    };
  }

function sumToN(n){
    let sum = 0;
    for (let i=1; i <=n; i++){
        sum +=i;
    }
    return sum;
}


const sumToNWithLogging = calculateExecutionTime(sumToN);

const result = sumToNWithLogging(10);

console.log(`Result: ${result}`);