import "./about.css";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import sign from "../../../assets/images/picture.png";
import curvedLine from "../../../assets/images/Rectangle11.png";
import home from "../../../assets/images/home.png";
import canteen from "../../../assets/images/canteen.png";
import hospital from "../../../assets/images/hospital.png";
import plans from "../../../assets/images/plans.png";
import image5 from "../../../assets/images/image5.png";
import Place from "../../../components/place/place";

function About() {
  return (
    <div className="about" id="about">
      <div className="about__block-comfort">
        <div className="block-comfort__title">
          <div className="title__text">С нами уютно!</div>
          <div className="title__info">
            Работники о/л «Зубренок» сделали все, чтобы детям в лагере было
            уютно, как дома. Для этого на протяжении всей летней смены
            организовываются образовательно-развлекательные и спортивные
            мероприятия (игры, конкурсы и соревнования), с детьми работают
            опытные воспитатели. Все это происходит на чистом воздухе, в 35 км
            от Минска!
          </div>
        </div>
        <div className="block-comfort__images">
          <div className="block-comfort__img-wrapper">
            <div className="block-comfort__img">
              <img src={image2} alt="Image 2" />
            </div>
            <div className="block-comfort__img">
              <img src={image1} alt="Image 1" />
            </div>
            <div className="block-comfort__img">
              <img src={image4} alt="Image 4" />
            </div>
            <div className="block-comfort__img">
              <img src={image3} alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
      <div className="about__block-places">
        <div className="block-places__content">
          <div className="content__title">
            <div>
              На территории лагеря<br></br>расположены:
            </div>
          </div>
          <div className="content__places-wrapper">
            <div className="content__places">
              <Place picture={home} label="5 Корпусов" />
              <Place picture={canteen} label="2 Столовые" />
              <Place picture={hospital} label="Медицинский пункт" />
              <Place picture={plans} label="Комнаты по 2-3 человека" />
            </div>
          </div>
        </div>
        <div className="block-places__picture">
          <div className="picture__sign">
            <img src={sign} alt="Picture" />
          </div>
          {/* <div className="picture__curved">
            <img src={curvedLine} alt="Curved line" />
          </div> */}
        </div>
      </div>
      <div className="about__block-description">
        <div className="block-description__title">
          <div className="title__text-wrapper">
            <div className="title__text">В ОЗДОРОВИТЕЛЬНОМ ЛАГЕРЕ ИМЕЮТСЯ:</div>
            <div className="title__info">
              Стадион, футбольное поле, баскетбольная и волейбольная площадки,
              игровые площадки, теннисный корт, теннисные столы, танцевальная
              площадка, спортзал, актовый зал, надувные горки, крытые бассейн и
              летняя эстрада.
            </div>
          </div>
          <div className="title__text-wrapper">
            <div className="title__text">ОХРАНА И МЕДОБСЛУЖИВАНИЕ:</div>
            <div className="title__info">
              Круглосуточную охрану организует внутренний отдел охраны и
              сотрудники РОВД г. Минска. На территории лагеря расположен
              медпункт с изолятором, организовано дежурство машины скорой
              помощи.
            </div>
          </div>
        </div>
        <div className="block-description__img">
          <img src={image5} alt="Image5" />
        </div>
      </div>
    </div>
  );
}

export default About;
