import { useState } from 'react'
import { InputBox } from './components'
import usecurrencyinfo from "./hooks/usecurrencyinfo";
import './App.css'

function App() {

  const [amount , setamount] = useState(0)
  const [from , setfrom] = useState("usd")
  const [to , setto] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const  currencyInfo = usecurrencyinfo(from)
  const options = Object.keys(currencyInfo)


  const swap = ()=>{
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div 
        className="w-96 h-screen px-5 flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className='mb-52 bg-yellow-600 flex flexwrap w-full h-10 text-center justify-center items-center text-3xl py-7 rounded-lg'>Convert-Currency</div>
        <div className="w-full mb-20">
            <div className="w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-transparent border border-white">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-2 ">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencychange={(currency)=> setamount(amount)}
                            selectcurrency= {from}
                            onAmountChange={(amount)=> setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 
                            -translate-x-1/2 
                            -translate-y-1/2 border-2 border-black rounded-md bg-blue-600
                            text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencychange={(currency)=> setto(currency)}
                            selectcurrency= {from}
                            amountDisable 
                            
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App




