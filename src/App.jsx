import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");
  
  const isOperator = (val) => /[*/+-]/.test(val);

  const handleClear = () => {
    setResult("");
    setInput("0");
  };
  const handleClick = (value) => {
    setInput((prev) => {
      if (isOperator(value) && isOperator(prev.slice(-1))) {
        if (value === "-") {
          return prev + value;
        } else {
          const operators = /[*/+-]/;
          const parts = prev.split(operators)
          return parts.join("")+value; //feeeeeeeekkkkkkk akkinnnnnnnnnn

        }
      }

      if (prev === "0" && value === "0") return prev;

      return prev === "0" ? value : prev + value;
    });
  };

  const handleClickDecimal = () => {
    setInput((prev) => {
      if(!prev.split(/[*+/-]/).slice(-1)[0].includes(".")){
        return prev+"."
      }
      return prev;
    });
  };

  
  const handleToggleSign = () => {
    setInput((prev) => {
      if(prev.charAt(0)==="-"){
        return prev.substring(1);
      }else{
        return "-"+prev;
      }
    });
  };

  const handlePercentage = () => {
    setInput((prev) => {
      return (parseFloat(prev) / 100).toString();
    });
  };

  const handleCalculate = () => {
    try {
    
      const evaluatedResult = Function("return " + input)();
      setResult(evaluatedResult);
      setInput(String(evaluatedResult));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-7'>
      <div className='bg-black p-4 rounded-xl'>
        <div className="text-right text-white text-3xl w-full h-10 bg-black rounded-md mb-4 border-none focus:outline-none no-spinner" id="result">
          {result}
        </div>
        <div className="text-right text-white text-3xl w-full h-10 bg-black rounded-md mb-4 border-none focus:outline-none no-spinner" id="display">
          {input}
        </div>
        <div className='grid grid-cols-4 gap-3'>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50' onClick={handleClear} id="clear">AC</button>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50' onClick={handleToggleSign} id="toggle-sign">+/-</button>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50' onClick={handlePercentage} id="percentage">%</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={() => handleClick("/")} id="divide">÷</button>

          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("7")} id="seven">7</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("8")} id="eight">8</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("9")} id="nine">9</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={() => handleClick("*")} id="multiply">×</button>

          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("4")} id="four">4</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("5")} id="five">5</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("6")} id="six">6</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={() => handleClick("-")} id="subtract">-</button>

          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("1")} id="one">1</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("2")} id="two">2</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("3")} id="three">3</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={() => handleClick("+")} id="add">+</button>

          <button className='col-span-2 w-44 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={() => handleClick("0")} id="zero">0</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' onClick={handleClickDecimal} id="decimal">.</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={handleCalculate} id="equals">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;









































































































/* code avec eval
function App() {
  const [input, setInput] = useState("0");

  const clear = () => {
    setInput("0");
  };

  const Result = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("ERROR");
    }
  };

  const inputVal = (val) => {
    if (val === "0" && input === "0") return;
  
    if (input === "0") {
      setInput(val);
    } else {
      setInput(prev => prev + val);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-7'>
      <div className='bg-black p-4 rounded-xl'>
        <input value={input} type="text" className="text-right text-white text-3xl w-full h-20 bg-black rounded-md mb-4 border-none focus:outline-none no-spinner" id="display" readOnly />
        <div className='grid grid-cols-4 gap-3'>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50' id="clear" onClick={clear}>AC</button>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'>+/-</button>
          <button className='w-20 h-20 rounded-full bg-gray-400 text-white text-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50' onClick={() => inputVal("%")}>%</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' onClick={() => inputVal("/")} id="divide">÷</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="seven" onClick={() => inputVal("7")}>7</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="eight" onClick={() => inputVal("8")}>8</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="nine" onClick={() => inputVal("9")}>9</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' id="multiply" onClick={() => inputVal("*")}>×</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="four" onClick={() => inputVal("4")}>4</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="five" onClick={() => inputVal("5")}>5</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="six" onClick={() => inputVal("6")}>6</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' id="subtract" onClick={() => inputVal("-")}>-</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="one" onClick={() => inputVal("1")}>1</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="two" onClick={() => inputVal("2")}>2</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="three" onClick={() => inputVal("3")}>3</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' id="add" onClick={() => inputVal("+")}>+</button>
          <button className='col-span-2 w-44 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="zero" onClick={() => inputVal("0")}>0</button>
          <button className='w-20 h-20 rounded-full bg-gray-700 text-white text-2xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50' id="decimal" onClick={() => inputVal(".")}>.</button>
          <button className='w-20 h-20 rounded-full bg-orange-400 text-white text-2xl hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50' id="equals" onClick={Result}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;*/





