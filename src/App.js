import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  const firstName = 'Lenard';
  const lastName = 'Agbalo';
  const age = 23;
  const students = {
    firstName: 'Nard',
    lastName: 'Abalo',
    age: 20,
  }

  const studentsArr =
  [ 
    {
      firstName: 'Nard',
      lastName: 'Abalo',
      age: 20,
    },
    {
      firstName: 'Mark',
      lastName: 'Espesa',
      age: 11,
    },
    {
      firstName: 'Lester',
      lastName: 'Musafa',
      age: 1,
    },
  ]


  const arr = [1,2,3,4,5]
  return (
  <div>
  <Header/>
  <main>
    <h1>Hello {firstName} {lastName} {age}</h1>
    <h1>Hello {students.firstName} {students.lastName} {students.age}</h1>
    {arr.map((num => <p> {num * 5} </p>))}

    {studentsArr.map((students => <p> {students.firstName} {students.lastName}</p>))}

  </main>
  <Footer/>

  </div>
  );
}

export default App;
