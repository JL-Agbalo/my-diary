import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Form from './components/Form';

function App() {
const [diary, setDiary] = useState('')
const changeHandle = (e) => {
  setDiary(e.target.value)
}
  return (
  <div>
  <Header/>
  <main>
      <Form myDiary = {diary} handleChange={changeHandle}></Form>
  </main>
  <Footer/>

  </div>
  );
}

export default App;
