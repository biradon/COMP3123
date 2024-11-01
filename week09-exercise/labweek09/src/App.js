import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome course="Full Stack Development" class="React JS Programming"/>
        <Student/>
      </header>
    </div>
  );
}

export default App;
