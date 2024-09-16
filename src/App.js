/** @format */

import React, { useState } from "react";
import { functions, httpsCallable } from "./firebaseConfig";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    const calculate = httpsCallable(functions, "calculate");
    try {
      const response = await calculate({
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        operator,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Kalkulator Firebase RPC</h1>
      <input
        type='number'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder='Angka pertama'
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <input
        type='number'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder='Angka kedua'
      />
      <button onClick={handleCalculate}>Hitung</button>
      {result !== null && <h2>Hasil: {result}</h2>}
    </div>
  );
};

export default App;
