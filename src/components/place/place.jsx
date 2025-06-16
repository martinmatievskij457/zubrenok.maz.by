import "./place.css";

function Place({ picture, label }) {
  return (
    <div className="place_wrapper">
      <div className="place_img">
        <img src={picture} alt={picture} />
      </div>
      <div className="place_label">{label}</div>
    </div>
  );
}

export default Place;
