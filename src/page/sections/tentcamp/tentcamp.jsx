import "./tentcamp.css";
import picture from "../../../assets/images/picture.png";
import tent from "../../../assets/images/tent.png";
import bag from "../../../assets/images/bag.png";
import curvedLine from "../../../assets/images/Rectangle11.png";
import icon from "../../../assets/images/icon_download.png";

function Tentcamp() {
  return (
    <div className="tentcamp" id="tentcamp">
      <div className="tentcamp__content">
        <div className="tentcamp__title-wrapper" >
          <div className="tentcamp__title">
            <div className="tentcamp__title__text" data-aos="zoom-in-right" data-aos-duration="1000">Палаточный лагерь</div>
            <div className="tentcamp__title__info" data-aos="zoom-in-right" data-aos-duration="1000">
              ОЛ «Зубренок» д. Волма приглашает детей 12-17 лет в профильный
              лагерь с использованием палаток.
            </div>
            <div className="tentcamp__title__info" data-aos="zoom-in-right" data-aos-duration="1000">
              Период оздоровления – 9 дней.
            </div>
            <div className="tentcamp__title__button" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="button__text">План мероприятия</div>
              <div className="button__icon">
                <img src={icon} alt="Icon Download" />
              </div>
            </div>
          </div>
        </div>
        <div className="tentcamp__images">
          <div className="tentcamp__sign-wrapper">
            <div className="tentcamp__sign">
              <div className="tentcamp__sign__image" data-aos="zoom-out-right" data-aos-duration="1000">
                <img src={picture} alt="Picture" className="image__sign" />
              </div>
            </div>
          </div>
          <div className="tentcamp__tent-wrapper">
            <div className="tentcamp__tent">
              <div className="tent__image-wrapper">
                <div className="tent__image" data-aos="zoom-out-down" data-aos-duration="1000">
                  <img src={tent} alt="Tent" className="image__tent" />
                </div>
              </div>
              <div className="bag__image-wrapper">
                <div className="bag__image" data-aos="zoom-out-left" data-aos-duration="1000">
                  <img src={bag} alt="Bag" className="image__bag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tentcamp__curved">
        <img src={curvedLine} alt="Curved Line" />
      </div>
    </div>
  );
}

export default Tentcamp;
