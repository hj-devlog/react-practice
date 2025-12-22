import { Component, useState } from 'react';
import './App.css';


function App() {
const [counter, setCounter]= useState(1)
  return (
<>
<Count 
counter ={counter} 
hello = "hello" 
array = {[1, 2, 3, "안녕하세요"]}
/> 
<button
onClick={() => {
  setCounter((prev) => prev +1)
  }}
  > 
    +
</button>
<button
onClick={() => {
  setCounter((prev) => prev -1)
  }}
  >
    -
</button>
</>
);
}

// class App extends Component {
//   state = {counter: 2};
//   render(){
//     return(
//       <>
//       <div>counter {this.state.counter}</div>
//       <button 
//       onClick={() => this.setState({counter: this.state.counter +1})}
//       >+</button>
//       <button onClick={() => this.setState({counter: this.state.counter -1})}
//       >-</button>
//       </>
//     );
//   }
// }

function Count ({array, counter, hello}) {
  console.log("array", array);
  console.log("counter", counter);
  console.log("hello", hello);
  return <div>counter : {counter}</div>
}

export default App;
