import React, { useId } from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencychange,
    currencyOptions = [],
    selectcurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()  

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} 
                className="text-black mb-2
                 mr-20 text-lg">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="w-20 h-10 mr-9 px-2 rounded-lg mt-5 bg-gray-700 py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}    //checker exost krta h ki nhi
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full text-lg">Currency</p>
                <select
                    className="rounded-lg px-1 py-1 
                    bg-black-100 cursor-pointer 
                    outline-none"
                    value = {selectcurrency}
                    onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
                    disabled = {currencyDisable}
                    
                >
                       {currencyOptions.map((Currency)=> (
                            <option key = {Currency}
                            value= {Currency}>
                            {Currency}
                            </option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;