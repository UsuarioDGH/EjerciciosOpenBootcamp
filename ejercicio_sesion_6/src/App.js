import logo from './logo.svg';
import './App.css';
import ClockF from './components/clockF';
//import Clock from './components/clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Clock ></Clock>*/}
        
        <ClockF/>
      </header>
    </div>
  );
}

export default App;
