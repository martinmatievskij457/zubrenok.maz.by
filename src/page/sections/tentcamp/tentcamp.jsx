import "./tentcamp.css";
import picture from "../../../assets/images/picture.png";
import tent from "../../../assets/images/tent.png";
import bag from "../../../assets/images/bag.png";
import rectangle1 from "../../../assets/images/rectangle1.png";
import icon from "../../../assets/images/icon_download.png";

function Tentcamp() {
  return (
    <div className="tentcamp" id="tentcamp">
      <div className="tentcamp_content">
        <div className="content_wrapper">
          <div className="tentcamp_title">
            <div className="tentcamp_title_text">Палаточный лагерь</div>
            <div className="tentcamp_title_info">
              ОЛ «Зубренок» д. Волма приглашает детей 12-17 лет в профильный
              лагерь с использованием палаток.
            </div>
            <div className="tentcamp_title_info">
              Период оздоровления – 9 дней.
            </div>
            <div className="tentcamp_title_button">
              <div className="button_text">План мероприятия</div>
              <div className="button_icon">
                <img src={icon} alt="Icon Download" />
              </div>
            </div>
          </div>
          <div className="img_wrapper">
            <div className="img_tentcamp">
              <img src={picture} alt="Picture" />
            </div>
          </div>
          <div className="tent_wrapper">
            <div className="tent_img">
              <img src={tent} alt="Tent" />
            </div>
            <div className="bag_img">
              <img src={bag} alt="Bag" />
            </div>
          </div>
        </div>
        <div className="line_wrapper">
          <div className="line_img">
            <img src={rectangle1} alt="Line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentcamp;
