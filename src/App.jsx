import "./App.css";
import React, { useState } from "react";


function App() {
  const [display, setDisplay] = useState("");
  const operators = ["+", "-", "*", "/"];

  React.useEffect(() => {
    alert("Всем калькуляторам привет! Остальным соболезную...");
  }, []);


  function checkExpression(expr) {
    if (!expr) return true;
    const lastChar = expr[expr.length - 1];
    if (operators.includes(lastChar)) return true;
    if (expr.includes("/0")) return true;
    return false;
  }

  function addSymbol(symbol) {
    const lastChar = display[display.length - 1];
    const isOperator = ["+", "-", "x", "÷"].includes(symbol);
    const lastIsOperator = ["+", "-", "x", "÷"].includes(lastChar);

    if (lastIsOperator && isOperator) return;
    if (display === "0" && !isOperator) {
      setDisplay(symbol);
    } else {
      setDisplay(display + symbol);
    }
  }

  function clearDisplay() {
    setDisplay("");
  }

  function calculate() {
    let expression = display.replace(/x/g, "*").replace(/÷/g, "/");
    let result = eval(expression);
    setDisplay(String(result));
  }

  return (
    <div className="app">
      <h1>Some Fucking Calculator</h1>
      <div className="case">
        <input id="display" value={display} disabled />

        <div className="buttons">

          <button id="num1" onClick={() => addSymbol("1")}>1</button>
          <button id="num2" onClick={() => addSymbol("2")}>2</button>
          <button id="num3" onClick={() => addSymbol("3")}>3</button>
          <button id="addition" onClick={() => addSymbol("+")}>+</button>

          <button id="num4" onClick={() => addSymbol("4")}>4</button>
          <button id="num5" onClick={() => addSymbol("5")}>5</button>
          <button id="num6" onClick={() => addSymbol("6")}>6</button>
          <button id="subtraction" onClick={() => addSymbol("-")}>-</button>

          <button id="num7" onClick={() => addSymbol("7")}>7</button>
          <button id="num8" onClick={() => addSymbol("8")}>8</button>
          <button id="num9" onClick={() => addSymbol("9")}>9</button>
          <button id="multiplication" onClick={() => addSymbol("x")}>x</button>

          <button id="num0" onClick={() => addSymbol("0")}>0</button>

          <button
            id="equation"
            onClick={calculate}
            disabled={checkExpression(display)}
          >
            =
          </button>

          <button id="clear" onClick={clearDisplay}>clear</button>

          <button id="division" onClick={() => addSymbol("÷")}>÷</button>
        </div>
      </div>
    </div>
  );
}

export default App;
