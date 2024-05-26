import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  const firstName = 'Lenard';
  const lastName = 'Agbalo';
  const age = 23;
  return (
  <div>
  <Header/>
  <main>
    <h1>Hello {firstName} {lastName} {age}</h1>
  </main>
  <Footer/>

  </div>
  );
}

export default App;
