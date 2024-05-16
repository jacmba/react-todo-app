import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import {FirstComponent} from './components/firstcomponent';
import SecondComponent from './components/secondcomponent';
import ThirdComponent from './components/thirdcomponent';

function App() {

  const [count, setCount] = useState(0);

  const incrementCounter = inc => setCount(count + inc)

  const decrementCounter = dec => setCount(count - dec)

  return (
    <div className="App">
      My ToDo application
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <div className='CounterPanel'>
        <h1>{count}</h1>
      </div>
      <Counter
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter} />
      <Counter
        increment={2} 
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter} />
      <Counter
      increment={3}
      incrementCounter={incrementCounter}
      decrementCounter={decrementCounter} />
    </div>
  );
}

export default App;