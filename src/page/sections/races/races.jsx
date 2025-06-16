import "./races.css";

function Races() {
  return (
    <div className="races" id="races">
      <div className="races_content">
        <div className="races_title">
          График заездов на летний сезон 2025 года
        </div>
        <div className="races_info">
          <div className="shift_wrapper">
            <div className="shift_text">1 смена</div>
            <div className="shift_text">2 смена</div>
            <div className="shift_text">3 смена</div>
            <div className="shift_text">4 смена</div>
            <div className="shift_text">5 смена</div>
          </div>
          <div className="date_wrapper">
            <div className="date_text">01.06.2025 - 15.06.2025</div>
            <div className="date_text">18.06.2025 - 02.07.2025</div>
            <div className="date_text">10.07.2025 - 24.07.2025</div>
            <div className="date_text">27.07.2025 - 10.08.2025</div>
            <div className="date_text">13.08.2025 - 27.08.2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Races;
