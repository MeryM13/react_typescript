import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from "./components/Square";
import OnlyEven from "./components/OnlyEven";
import Temperature from "./components/Temperature";
import Timer from "./components/Timer";
import BackwardsTimer from "./components/BackwardsTimer";
import PrimesGen from "./components/PrimesGen";
import SelectCity from "./components/SelectBoxCities";
import Calculator from "./components/Calculator";
import BasesCalculator from "./components/BasesCalculator";
import BitNumber from "./components/BitNumber";
import LoginForm from "./components/LoginForm";
import BetterLoginForm from "./components/BetterLoginForm";

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <BetterLoginForm/>
        </header>
      </div>
  );
}

export default App;
