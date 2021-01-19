import React from "react";
import Body from "./components/Body";
import Buttons from "./components/Buttons"

function App() {
  const [step, setStep] = React.useState(1);

  let disabled = false;
  if (step === 1) {
    disabled = true;
  }

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h2>Калькулятор цены конструкций</h2>
        </div>
        <div className="app__body body">
          <div className="body__header">
            <p>Шаг {step}</p>
          </div>
          <Body step={step} setStep={setStep} />
        </div>
        <Buttons step={step} setStep={setStep} disabled={disabled} />
      </div>
    </div>
  );
}

export default App;
