import { Component, useState } from 'react';
import './App.css';

function App() {
const [counter, setCounter]= useState(0);
const [inputValue, setInputValue] = useState(2)

const incrementCounter = () => {
  setCounter(counter +1)
}
const decremntCounter = () => {
  setCounter(counter -1);
}

const setCounterNumber = () => {
  setCounter(inputValue);
}
  return (
<>
<Count counter ={counter} /> 
<PlusButton setCounter={setCounter} incrementCounter=
  {incrementCounter}/>
<MinusButton setCounter={setCounter} 
decremntCounter=
{decremntCounter}/>
<CounterInput 
inputValue={inputValue} 
setInputValue ={setInputValue}
setCounterNumber = {setCounterNumber}/>
</>
  );
}
function CounterInput ({inputValue, setInputValue,setCounterNumber}) {
  return(
    <>
    <input type='number' value={inputValue} onChange=
    {(event) => setInputValue(event.target.value)} />
    <button onClick={setCounterNumber}>입력</button>
    </>
  )
}

function PlusButton ({setCounter, incrementCounter}){
  return(
  <button
    onClick={incrementCounter}
    > + </button>)
}

function MinusButton ({setCounter, decremntCounter}){
  return(
  <button
    onClick={decremntCounter}
    > - </button>)
}

function Count ({counter}) {
  return <div>counter : {counter}</div>
}
//class ClassApp extends Component {
//   state = {counter: 1};
// 
//   incrementCounter = () => {
//     this.setState({counter: this.state.counter +1});
//   }
//   decremntCounter = () => {
//     this.setState({counter: this.state.counter -1})
//   }
//   render(){
//     return(
//       <>
//     <Count counter={this.state.counter} />
//     <PlusButton incrementCounter={this.incrementCounter}/>
//     <MinusButton decremntCounter={this.decremntCounter}/>
//     </>
//     );
//   }
// }
// class PlusButton extends Component {
//   render() {
//     return (
//     <button 
//       onClick={this.props.incrementCounter}
//       >
//         +
//       </button>
//       );
//   }
// }
// 
// class MinusButton extends Component {
//   render() {
//     return (
//     <button
//       onClick={this.props.decremntCounter}
//       >
//         -
//     </button>
// 
//     );
//   }
// }
// 
// class Count extends Component {
//   render(){
//     return <div>counter: {this.props.counter}</div>
//   }
// }

export default App;
