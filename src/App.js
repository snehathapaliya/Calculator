import { useState } from 'react';

function App() {
  const [cal,setcal] = useState("");
  const [result,setresult] = useState("");
  
  const ops =['/', '*', '+', '-', '.'];

  const updatecal = value => {
    if(
       ops.includes(value) && cal === '' || ops.includes(value) && ops.includes(cal.slice(-1))
      ) {
          return;
      }
    setcal(cal + value);

     if(!ops.includes(value)){
      setresult(eval(cal + value).toString());
     }
  }

  const createDigits = () => {

    const digits = [];
    
    for (let i=1; i<10; i++){
      digits.push(
        <button onClick={()=> updatecal(i.toString())} key={i}>{i}</button>
      )

    }
    return digits;
  }

  const calculate = () => {
    setcal(eval(cal).toString());
  }

  const deletelast = () => {
    if(cal === ''){
      return;
    }
    const value = cal.slice(0,-1);
    setcal(value);
  }

  return (
    <div className="fi-App">
      <div classnmame="fi-Calculator">
        <div className="fi-Display">
          {result ? <span>({result})</span>: ''}&nbsp;
          { cal || "0" }
        </div>
        <div className="fi-operators">
          <button onClick={()=> updatecal('/')}>/</button>
          <button onClick={()=> updatecal('*')}>*</button>
          <button onClick={()=> updatecal('+')}>+</button>
          <button onClick={()=> updatecal('-')}>-</button>
          <button onClick={deletelast}>Del</button>
        </div>
        <div className="fi-digits">
          { createDigits() }
        <button onClick={()=> updatecal('0')}>0</button>
        <button onClick={()=> updatecal('.')}>.</button>
        <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}


export default App;
