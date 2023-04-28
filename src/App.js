import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="berlin"/>
      <footer>
      This project was coded by Mahsa Manafpour and <a href='https://github.com/mahsamnfpr/react-weather-five' target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
    </div>
      </div>
    
  );
}
