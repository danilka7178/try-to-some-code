import React from "react";

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h2>Калькулятор цены конструкций</h2>
        </div>
        <div className="app__body body">
          <div className="body__header">
            <p>Шаг</p>
          </div>
          <div className="body__main main">
            <div className="main__header">
              <h3>Что будем строить?</h3>
            </div>
            <div className="main__body">
              <ul className="main__list">
                <li className="main__item">
                  Жилой дом
                </li>
                <li className="main__item">
                  Гараж
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app__footer">
          <button>Отмена</button>
          <button>Далее</button>
        </div>
      </div>
    </div>
  );
}

export default App;
