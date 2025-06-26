import "./banner.css";
import zubrenokLogo from "../../../assets/images/logo.png";
import eye from "../../../assets/images/eye.png";
import youtube from "../../../assets/images/youtube.png";
import instagram from "../../../assets/images/instagram.png";
import telegram from "../../../assets/images/telegram.png";
import { useEffect, useState } from "react";

function Banner() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="banner" id="banner">
      <header className="banner__header">
        <div className="banner__menu">
          <div className="banner__menu-header">
            <div className="banner__menu-logo">
              <img src={zubrenokLogo} alt="Zubrenok Logo" className="img" />
            </div>
            <div className="banner__menu-title">ОЛ "Зубрёнок"</div>
          </div>
          <div className="banner__menu-button">
            <div>
              <button
                className={`burger-button ${
                  isMenu ? "burger-button__active" : ""
                }`}
                onClick={() => setIsMenu(true)}
              >
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
              </button>
            </div>
          </div>
        </div>
        <nav className="banner__navigate">
          <ul className="navigate-list">
            <li className="navigate-list__item">
              <a href="#about">О нас</a>
            </li>
            <li className="navigate-list__item">
              <a href="#questions">Вопросы</a>
            </li>
            <li className="navigate-list__item">
              <a href="#tentcamp">Палаточный лагерь</a>
            </li>
            <li className="navigate-list__img">
              <img src={zubrenokLogo} alt="Zubrenok Logo" className="img"></img>
            </li>
            <li className="navigate-list__item">
              <a href="#races">График заездов</a>
            </li>
            <li className="navigate-list__item">
              <a href="#routine">Распорядок дня</a>
            </li>
            <li className="navigate-list__img">
              <img src={eye} alt="Eye" className="img"></img>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner__content">
        <div className="banner__title">
          <div className="banner__title-text">
            ДЕТСКИЙ ОЗДОРОВИТЕЛЬНЫЙ ЛАГЕРЬ "ЗУБРЕНОК"
          </div>
          <div className="banner__description">
            Работники о/л «Зубренок» сделали все, чтобы детям в лагере было
            уютно, как дома. Для этого на протяжении всей летней смены
            организовываются образовательно-развлекательные и спортивные
            мероприятия (игры, конкурсы и соревнования), с детьми работают
            опытные воспитатели. Все это происходит на чистом воздухе, в 35 км
            от Минска!
          </div>
          <div className="banner__button-wrapper">
            <button className="banner__button">Купить путёвку</button>
          </div>
        </div>
        <div className="banner__networks">
          <div className="banner__networks__logo">
            <a
              href="https://www.youtube.com/channel/UCetonifniEfk9ZX1mCiM6Sw"
              target="_blank"
            >
              <img src={youtube} alt="Youtube Logo" />
            </a>
          </div>
          <div className="banner__networks__logo">
            <a href="https://www.instagram.com/zubrenok_maz/" target="_blank">
              <img src={instagram} alt="Instagam Logo" />
            </a>
          </div>
          <div className="banner__networks__logo">
            <a href="https://t.me/zubrenok_maz_official" target="_blank">
              <img src={telegram} alt="Telegram Logo" className="tg"/>
            </a>
          </div>
        </div>
      </div>

      {isMenu && (
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <button className="mobile-menu__close" onClick={toggleMenu}>
              ×
            </button>
          </div>
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a href="#about" onClick={toggleMenu}>
                  О нас
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="#questions" onClick={toggleMenu}>
                  Вопросы
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="#tentcamp" onClick={toggleMenu}>
                  Палаточный лагерь
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="#races" onClick={toggleMenu}>
                  График заездов
                </a>
              </li>
              <li className="mobile-menu__item">
                <a href="#routine" onClick={toggleMenu}>
                  Распорядок дня
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Banner;
