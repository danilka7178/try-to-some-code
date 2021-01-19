import React from "react";
let titleText;

function Body({ step, setStep }) {
   const [floor, setFloor] = React.useState("1");
   const [building, setBuilding] = React.useState(1);

   if (step === 1) {
      titleText = "Что будем строить?";
   } else if (step === 2) {
      titleText = "Колличество этажей(число):"
   } else if (step === 3) {
      titleText = "Материал стен:"
   } else if (step === 4) {
      titleText = "Длина стен (в метрах):"
   } else if (step === 5) {
      titleText = "Успешно"
   } else {
      titleText = "Ошибка"
   };

   const clickHouse = () => {
      setStep(step => step + 1);
      setBuilding(1);
   }

   const clickGarage = () => {
      setStep(step => step + 1);
      setBuilding(2);
   }

   if (step === 1) {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <ul className="main__list">
                  <li className="main__item">
                     <button onClick={clickHouse}>Жилой дом</button>
                  </li>
                  <li className="main__item">
                     <button onClick={clickGarage}>Гараж</button>
                  </li>
               </ul>
            </div>
         </div>)
   } else if (step === 2) {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <input autoComplete="off" type="text" value={floor} onChange={e => setFloor(e.target.value)} />
            </div>
         </div>)
   } else if (step === 3) {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <ul className="main__list">
                  <li className="main__item">
                     <button onClick={() => setStep(step => step + 1)}>Кирпич</button>
                  </li>
                  <li className="main__item">
                     <button onClick={() => setStep(step => step + 1)}>Шлакоблок</button>
                  </li>
                  <li className="main__item">
                     <button onClick={() => setStep(step => step + 1)}>Деревянный брус</button>
                  </li>
               </ul>
            </div>
         </div>)
   } else if (step === 4) {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <input autoComplete="off" type="text" /> <span> X </span>
               <input autoComplete="off" type="text" />
            </div>
         </div>)
   } else if (step === 5) {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <h3 className="main__success">Цена строения: 224 тыс. пиастров</h3>
            </div>
         </div>)
   } else {
      return (
         <div className="body__main main">
            <div className="main__header">
               <h3>{titleText}</h3>
            </div>
            <div className="main__body">
               <h3 classname="main__error">Некоректные размеры здания</h3>
            </div>
         </div>)
   }
}

export default Body;