import { useState } from "react";
function App() {

	const [calc,setCalc] = useState("");
	const [result,setResult] = useState("");

	const ops = ['/','*','+','-','.'];

	const updatecal = value => {
		if(
			ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
		)
		{
			return;
		}
		setCalc(calc + value);
		if(!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	const CreateDigits = () => {

		const digits = [];
		for(let i=1;i<10;i++) {
			digits.push(
				<button onClick={ () => updatecal(i.toString()) } key={i}>{i}</button>
			)
		}
		return digits;
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deletelast = () => {
		if(calc == '') {
			return;
		}
		const val = calc.slice(0,-1);
		setCalc(val);
	}
	
  return (
    <div className="App">
	  <div className="calculator">
		<div className='display'>
			 
			{calc || "0"}<br/>
			{result ? <span>{result}</span> : ''}
		</div>
		<div className='operators'>
			<button onClick={ () => updatecal('/') }>/</button>
			<button onClick={ () => updatecal('*') }>*</button>
			<button onClick={ () => updatecal('+') }>+</button>
			<button onClick={ () => updatecal('-') }>-</button>
			<button onClick={deletelast}>DEL</button>
		</div>
		<div className='digits'>
			{CreateDigits()}
			<button onClick={ () => updatecal('0') }>0</button>
			<button onClick={ () => updatecal('.') }>.</button>
			<button onClick={calculate}>=</button>
		</div>
	  </div>
    </div>
  );
}

export default App;
