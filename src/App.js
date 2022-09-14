


function App() {
  return (
    <div className="App">
      <div classnmame="Calculator">
        <div className="Display">
          {result ? <span>({result})</span>: ''}&nbsp;
          { cal || "0" }
        </div>
        <div className="operators">
          <button onClick={()=> updatecal('/')}>/</button>
          <button onClick={()=> updatecal('*')}>*</button>
          <button onClick={()=> updatecal('+')}>+</button>
          <button onClick={()=> updatecal('-')}>-</button>
          <button onClick={deletelast}>Del</button>
        </div>
        <div className="digits">
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
