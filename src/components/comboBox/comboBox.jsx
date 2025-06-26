import "./comboBox.css";
import arrow from "../../assets/images/arrow.png";
import arrowUp from "../../assets/images/arrow_up.png";
import { useState } from "react";

function ComboBox({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="combobox">
      <div
        className={`combobox__title ${isVisible ? 'active' : ''}`}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <div className="title__question">{question}</div>
        <div className="title__arrow">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
      {isVisible && (
        <div className="combobox__answer">
          <div className="answer__text">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default ComboBox;
