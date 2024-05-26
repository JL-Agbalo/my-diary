import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
const [diary, setDiary] = useState('')
const changeHandle = (e) => {
  setDiary(e.target.value)
}

// componentWillUnmount
// componentDidUnmount

const [showForm, setshowForm] = useState(true)
// useEffect(() => {
//   console.log("Render") 
//   // Pag may Changes na rerender

//   return() =>{
//     console.log('Unmount')
//   }

// }, [example]) // Every meron ka neto marerender lang sya once || Pwede din mag lagay ng states dito
// } ) // Every changes mag rerender


  return (
  <div>
  <Header/>
  <main>
    <button onClick={() => setshowForm(!showForm)}>Toggle</button>
    {showForm &&
    <Form myDiary = {diary} handleChange={changeHandle}></Form>
    }     


    {/* <input name= 'example' value= {example} onChange = {(e) => setExample(e.target.value)} >    </input> */}
  </main>
  <Footer/>

  </div>
  );
}

export default App;
