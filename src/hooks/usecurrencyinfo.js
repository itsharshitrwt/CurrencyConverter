//we can use built in hooks in our custom hooks.
import {useEffect ,useState} from "react";

function usecurrencyinfo(currency){     //can take optional arguments  // To use it whensomeone clicks so we need a different hook 'useeffect' automatic fetch call and 2 funstion nhi bnana padega
    const [data , setdata] = useState({});
    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res)=> res.json())
       .then((res) => setdata(res[currency])) //hr baar key access krne ke liye . jaruri ni h we can use square brackets as well toh confusion bi ni hoga ki .usd kre ya .inr
       console.log(data);
       
    } , [currency])
    console.log(data);
    return data;
    
}

export default usecurrencyinfo;