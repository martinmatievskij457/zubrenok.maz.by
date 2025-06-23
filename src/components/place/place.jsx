import "./place.css";

function Place({ picture, label }) {
  return (
    <div className="place">
      <div className="place__img">
        <img src={picture} alt={picture} />
      </div>
      <div className="place__label">{label}</div>
    </div>
  );
}

export default Place;
