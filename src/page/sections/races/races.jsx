import "./races.css";

function Races() {
  return (
    <div className="races" id="races">
      <div className="races__title">
        График заездов на летний сезон 2025 года
      </div>
      <div className="races__info">
        <div className="races__shift-wrapper">
          <div className="races__shift">1 смена</div>
          <div className="races__shift">2 смена</div>
          <div className="races__shift">3 смена</div>
          <div className="races__shift">4 смена</div>
          <div className="races__shift">5 смена</div>
        </div>
        <div className="races__date-wrapper">
          <div className="races__date">01.06.2025 - 15.06.2025</div>
          <div className="races__date">18.06.2025 - 02.07.2025</div>
          <div className="races__date">10.07.2025 - 24.07.2025</div>
          <div className="races__date">27.07.2025 - 10.08.2025</div>
          <div className="races__date">13.08.2025 - 27.08.2025</div>
        </div>
      </div>
    </div>
  );
}

export default Races;
