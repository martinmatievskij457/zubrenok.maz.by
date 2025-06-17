import "./comboBox.css";
import arrow from "../../assets/images/arrow.png";
import arrowUp from "../../assets/images/arrow_up.png";
import { useState } from "react";

function ComboBox({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="cmbx_wrapper">
      <div className="cmbx_title" onClick={() => setIsVisible(prev => !prev)}>
        <div className="cmbx_question">{question}</div>
        <div className="cmbx_arrow">
          {isVisible ? (
            <img src={arrowUp} alt="Arrow" />
          ) : (
            <img src={arrow} alt="Arrow" />
          )}
        </div>
      </div>
      {isVisible && (
        <div className="cmbx_answer">
          <div className="answer_text">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default ComboBox;
