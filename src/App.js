import logo from './logo.svg';
import './App.css';
import { add, multiply } from './Export/Practce/Practce';


import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

// import add from './Export/Practce/Practce';

function App() {
  const num1 = 10;
  const num2 = 20;
  const total = add(num1,num2)
  const multiplys = multiply(num1,num2);
  return (
    <div className="App">
   
<h1> total : {total} </h1>
<h1> Multiply  : {multiplys} </h1>
<Cosmetics></Cosmetics>
      <Shoes></Shoes>

    </div>
  );
}

export default App;
