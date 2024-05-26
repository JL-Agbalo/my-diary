import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
const [num, setNum ] = useState(1);
const [userName, setUserName] = useState('Code with Nard')

  return (
  <div>
  <Header/>
  <main>
    <h1>{num}</h1>
    {/* <button onClick={() => setNum(num + 1)}>Add 1</button> */}
    <button onClick={() => setNum(currentNumber => currentNumber + 1)}>Add 1</button>
    <h1>{userName}</h1>
    {/* <button onClick={() => setUserName(currentUserName => "Code with Lenard")}>Change</button> */}

    {/* <h1>{userName}</h1> */}
    <input
        name="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
  </main>
  <Footer/>

  </div>
  );
}

export default App;
