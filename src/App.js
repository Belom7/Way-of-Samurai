import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tehnologies/>
    </div>
  );
}

function Header() {
  return(
    <div>
      <div>Home</div>
      <div>Class</div>
      <div>Office</div>
    </div>
  )
}

function Tehnologies() {
  return(
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  )
}

export default App;
