import "./footer.css";
import logo from "../../assets/images/logo.png";
import logoMAZ from "../../assets/images/logoMAZ.png";
import { useState } from "react";

function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="content__header">
          <div className="header__logoZubrenok">
            <div className="header__logoZubrenok__img">
              <img src={logo} alt="Logo Zubrenok" />
            </div>
            <div className="header__logoZubrenok__title">ОЛ "Зубренок"</div>
          </div>
          <div className="header__logoMaz">
            <div className="header__logoMaz__img">
              <img src={logoMAZ} alt="Logo MAZ" />
            </div>
          </div>
        </div>
        <div className="content__main">
          <div className="content__main__coordinates">
            <div className="content__main__coordinates-wrapper">
              <div className="content__coordinates__text">
                22224, Минская область, Смолевичский район, д.<br></br> Волма,
                расположен в 35 км от г. Минска
              </div>
              <div className="content__coordinates__map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A983f4764ff2381fc5da4e480dd4b10fa9c11a107658994574af844eb2456fa7d&amp;source=constructor"
                  frameborder="0"
                  className="map"
                ></iframe>{" "}
              </div>
            </div>
          </div>
          <div className="ana">
            <div className="content__main__contacts">
              <div className="contacts__wrapper">
                <div className="contacts__title">Телефоны:</div>
                <div className="contacts__phone__info">
                  ОТДЕЛ РЕАЛИЗАЦИИ ПУТЕВОК:
                </div>
                <div className="contacts__phone__info">
                  Максимович Наталья Михайловна<br></br>Тел/факс:
                  8-017-217-20-27
                </div>
              </div>
              <div className="contacts__wrapper">
                <div className="contacts__title">Файлы:</div>
                <div className="contacts__download">
                  <div>
                    <a
                      href={isChecked ? "#" : undefined}
                      onClick={(e) => {
                        if (!isChecked) {
                          e.preventDefault();
                        }
                      }}
                      className={!isChecked ? "link_block_download" : ""}
                    >
                      Скачать
                    </a>{" "}
                    форму заявления<br></br>(для физических лиц)
                  </div>
                </div>
                <div className="contacts__download">
                  <div>
                    <a
                      href={isChecked ? "#" : undefined}
                      onClick={(e) => {
                        if (!isChecked) {
                          e.preventDefault();
                        }
                      }}
                      className={!isChecked ? "link_block_download" : ""}
                    >
                      Скачать
                    </a>{" "}
                    форму гарантийного письма<br></br>(для юридических лиц)
                  </div>
                </div>
                <div className="contacts__info">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    name="contacts"
                    id="contacts"
                    className="contacts__info__checkbox"
                  />
                  <label for="contacts" className="contacts__info__label">
                    Я согласен на обработку персональных данных
                  </label>
                </div>
              </div>
            </div>
            <div className="content__main__menu">
              <div className="menu__title">Меню:</div>
              <div className="menu__text">
                <a href="#about">О нас</a>
              </div>
              <div className="menu__text">
                <a href="#news">Новости</a>
              </div>
              <div className="menu__text">
                <a href="#races">График заездов</a>
              </div>
              <div className="menu__text">
                <a href="#routine">Распорядок дня в лагере</a>
              </div>
              <div className="menu__text">
                <a>Обращение граждан</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__text">
          © 2025 Сайт. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
