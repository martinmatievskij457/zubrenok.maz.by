import "./about.css";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import picture from "../../../assets/images/picture.png";
import rectangle from "../../../assets/images/rectangle.png";
import rectangle1 from "../../../assets/images/rectangle1.png";
import home from "../../../assets/images/home.png";
import canteen from "../../../assets/images/canteen.png";
import hospital from "../../../assets/images/hospital.png";
import plans from "../../../assets/images/plans.png";
import image5 from "../../../assets/images/image5.png";
import Place from "../../../components/place/place";

function About() {
  return (
    <div className="about" id="about">
      <div className="about_content">
        <div className="about_block_1">
          <div className="block_1_title">
            <div className="title_text">С нами уютно!</div>
            <div className="title_info">
              Работники о/л «Зубренок» сделали все, чтобы детям в лагере было
              уютно, как дома. Для этого на протяжении всей летней смены
              организовываются образовательно-развлекательные и спортивные
              мероприятия (игры, конкурсы и соревнования), с детьми работают
              опытные воспитатели. Все это происходит на чистом воздухе, в 35 км
              от Минска!
            </div>
          </div>
          <div className="block_1_img_wrapper">
            <div className="block_1_img">
              <img src={image2} alt="Image 2" />
            </div>
            <div className="block_1_img">
              <img src={image1} alt="Image 1" />
            </div>
            <div className="block_1_img">
              <img src={image4} alt="Image 4" />
            </div>
            <div className="block_1_img">
              <img src={image3} alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="about_block_2">
          <div className="picture_wrapper">
            <div className="rectangle">
              <img src={rectangle} alt="Rectangle" />
            </div>
            <div className="picture">
              <img src={picture} alt="Picture" />
            </div>
            <div className="rectangel1">
              <img src={rectangle1} alt="Rectangle1" />
            </div>
          </div>
          <div className="block_2_text">
            <div className="block_2_title1">На территории лагеря</div>
            <div className="block_2_title2">расположены:</div>
            <div className="block_2_content">
              <Place picture={home} label="5 Корпусов" />
              <Place picture={canteen} label="2 Столовые" />
              <Place picture={hospital} label="Медицинский пункт" />
              <Place picture={plans} label="Комнаты по 2-3 человека" />
            </div>
          </div>
        </div>
        <div className="about_block_3">
          <div className="block_3_title">
            <div className="title_up">
              <div className="title_up_text">
                В ОЗДОРОВИТЕЛЬНОМ ЛАГЕРЕ ИМЕЮТСЯ:
              </div>
              <div className="title_up_info">
                Стадион, футбольное поле, баскетбольная и волейбольная площадки,
                игровые площадки, теннисный корт, теннисные столы, танцевальная
                площадка, спортзал, актовый зал, надувные горки, крытые бассейн
                и летняя эстрада.
              </div>
            </div>
            <div className="title_down">
              <div className="title_down_text">ОХРАНА И МЕДОБСЛУЖИВАНИЕ</div>
              <div className="title_down_info">
                Круглосуточную охрану организует внутренний отдел охраны и
                сотрудники РОВД г. Минска. На территории лагеря расположен
                медпункт с изолятором, организовано дежурство машины скорой
                помощи.
              </div>
            </div>
          </div>
          <div className="block_3_img_wrapper">
            <div className="block_3_img">
              <img src={image5} alt="Image5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
