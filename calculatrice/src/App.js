import './App.css';
import React, { useState } from 'react';

function App() {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');


  function clearInputs(){
    setValue1("");
    setValue2("");
    setResult("");
  }


  function Addition() {
    const num1 = parseInt(value1, 10);
    const num2 = parseInt(value2, 10);
    const sum = num1 + num2;
    setResult(sum);
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Simple calculator</h1>
      <div className="calculator-inputs">
        <input type="text" id="value1" name="value1" placeholder="NUMBER e.g. 1337" value={value1} onChange={(e) => setValue1(e.target.value)}/>
        <input type="text" id="value2" name="value2" placeholder="NUMBER e.g. 2108" value={value2} onChange={(e) => setValue2(e.target.value)}/>
      </div>
      <div className="calculator-buttons">
        <button type="button" onClick={Addition}>+ Add</button>
        <button type="button">- Substract</button>
        <button type="button">/ Divide</button>
        <button type="button">x Multiply</button>
      </div>
      <div className="calculator-result-reset">
      <input type="text" id="result" name="result" placeholder="Result" value={result}/>
      <button className="button-reset" type="button" onClick={clearInputs}>Clear</button>
      </div>
    </div>
  );
}

export default App;
