import { useMemo, useState } from "react"

const Demo = ()=>{
    const [state,setState] = useState(0)

    // const handleFunction = ()=>{console.log('you are clicked')}
    // const handleClick = ()=>{
    //     setState(state+1)
    // }
    function isPrime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
           return false;
          }
        }
        return true;
       }
      
       //Function to find the nth prime number
       function findNthPrime(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
          if (isPrime(num)) {
           count++;
          }
          num++;
        }
        return num - 1;
       }
      
    //    console.log(findNthPrime(10));
    //    console.log(findNthPrime(100));
    const prime = useMemo(()=>findNthPrime(state),[state])
    console.log(prime)
    return(
        <div>
            <button onClick={()=>setState(state+1)}>Click +</button>
            <p>Count: {state}</p>
            <p>{prime}</p>
            
        </div>
    )
}

export default Demo