import "./banner.css";
import logo from "../../../assets/images/logo.png";
import eye from "../../../assets/images/eye.png";
import youtube from "../../../assets/images/youtube.png";
import instagram from "../../../assets/images/instagram.png";
import telegram from "../../../assets/images/telegram.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <header className="header">
          <div className="header_content">
            <nav className="navigate">
              <ul className="list">
                <li className="list_item"><a href="#about">О нас</a></li>
                <li className="list_item">Вопросы</li>
                <li className="list_item">Палаточный лагерь</li>
                <li className="list_item_img">
                  <img src={logo} alt="logo"></img>
                </li>
                <li className="list_item">
                  <a href="#races">График заездов</a>
                </li>
                <li className="list_item"><a href="#routine">Распорядок дня</a></li>
                <li className="list_item_img">
                  <img src={eye} alt="eye"></img>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="title">
          <div className="title_content">
            <div className="title_text">
              ДЕТСКИЙ ОЗДОРОВИТЕЛЬНЫЙ ЛАГЕРЬ "ЗУБРЕНОК"
            </div>
            <div className="info">
              Работники о/л «Зубренок» сделали все, чтобы детям в лагере было
              уютно, как дома. Для этого на протяжении всей летней смены
              организовываются образовательно-развлекательные и спортивные
              мероприятия (игры, конкурсы и соревнования), с детьми работают
              опытные воспитатели. Все это происходит на чистом воздухе, в 35 км
              от Минска!
            </div>
            <div className="button_wrapper">
              <button className="button">Купить путёвку</button>
            </div>
          </div>
        </div>
        <div className="networks_wrapper">
          <div className="networks_logo">
            <a href="https://www.youtube.com/channel/UCetonifniEfk9ZX1mCiM6Sw">
              <img src={youtube} alt="Youtube Logo" />
            </a>
          </div>
          <div className="networks_logo">
            <a href="https://www.instagram.com/zubrenok_maz/">
              <img src={instagram} alt="Instagam Logo" />
            </a>
          </div>
          <div className="networks_logo">
            <a href="https://t.me/zubrenok_maz_official">
              <img src={telegram} alt="Telegram Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
