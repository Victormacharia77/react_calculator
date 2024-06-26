import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
   /* if (curState.includes(".") && e.target.innerText === ".") return */
  
  
   if (curState && curState.includes(".") && e.target.innertext === ".") return

    if (total) {
      setPreState('')
    }

    curState ? setCurState((pre) =>pre + e.target.innerText): setCurState(e.target.innertext)
    setTotal(false);
  };

  useEffect (() => {
    setInput(curState);
   }, [curState]);
 
   useEffect(() => {
setInput("0");
   }, []);
   const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };
  const equals = (e) => {
    if (e?.target.innerText === "=")
    setTotal(true)
  };

  let cal;
  switch (operator) {
    case "/":
      cal = String(parseFloat(preState) / parseFloat(curState));
      break;
    case "*":
      cal = String(parseFloat(preState) * parseFloat(curState));
      break;
    case "+":
      cal = String(parseFloat(preState) + parseFloat(curState));
      break;
    case "-":
      cal = String(parseFloat(preState) - parseFloat(curState));
      break;
    default:
      // Handle unknown operator
      break;
  }
  setInput("")
  setPreState(cal)
  setCurState("")

  const minusplus = () => {};
  const percent = () => {};
  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{input !=="" || input }</div>

        <div className="btn light-gray" onClick={reset}>
          AC
        </div>

        <div className="btn light-gray" onClick={percent}>
          %
        </div>

        <div className="btn light-gray" onClick={minusplus}>
          +/-
        </div>

        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn " onClick={inputNum}>
          7
        </div>

        <div className="btn " onClick={inputNum}>
          8
        </div>

        <div className="btn " onClick={inputNum}>
          9
        </div>

        <div className="btn orange" onClick={operatorType}>
          x
        </div>

        <div className="btn " onClick={inputNum}>
          4
        </div>

        <div className="btn " onClick={inputNum}>
          5
        </div>

        <div className="btn " onClick={inputNum}>
          6
        </div>

        <div className="btn orange" onClick={operatorType}>
          +
        </div>

        <div className="btn " onClick={inputNum}>
          1
        </div>

        <div className="btn " onClick={inputNum}>
          2
        </div>

        <div className="btn " onClick={inputNum}>
          3
        </div>

        <div className="btn orange" onClick={operatorType}>
          -
        </div>

        <div className="btn zero " onClick={inputNum}>
          0
        </div>

        <div className="btn " onClick={inputNum}>
          .
        </div>

        <div className="btn " onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
