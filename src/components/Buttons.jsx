import React from "react";

function Buttons({ step, setStep, disabled }) {

   const goCalculate = () => {
      console.log("Пошел расчёт");
   }

   if (step < 4) {
      return (
         <div className="app__footer">
            <button disabled={disabled} onClick={() => setStep(step => step - 1)}>Отмена</button>
            <button onClick={() => setStep(step => step + 1)}>Далее</button>
         </div>
      )
   } else if (step === 4) {
      return (
         <div className="app__footer">
            <button onClick={() => setStep(step => step - 1)}>Отмена</button>
            <button onClick={goCalculate}>Рассчитать</button>
         </div>
      )
   } else {
      return (
         <div className="app__footer">
            <button onClick={() => setStep(1)}>Новый расчет</button>
         </div>
      )
   }
}

export default Buttons;