import React from "react";
import { SMain } from "./App.style";
import CalculatorForm from "./components/form/calculatorForm";

function App() {
  return (
    <div className="App">
      <SMain>
        <div className="container">
          <CalculatorForm />
        </div>
      </SMain>
      <footer>
        <div className="container">
          <small>
            Developed by <a href="https://portfolio.hbler.com">hbler</a>
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
