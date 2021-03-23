import logo from './logo.svg';
import './App.css';

function App() {
  let dateActuelle = new Date();
  
  return (
    <div className="App">
      <h1>Aujourd'hui nous sommes le : {dateActuelle.getDay()}/{dateActuelle.getMonth()}/{dateActuelle.getFullYear()}</h1>
    </div>
  );
}

export default App;