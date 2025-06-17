import "./footer.css";
import logo from "../../assets/images/logo.png";
import logoMAZ from "../../assets/images/logoMAZ.png";
import { useState } from "react";

function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="footer">
      <div className="footer_content_wrapper">
        <div className="footer_content">
          <div className="coordinates_wrapper">
            <div className="logoZubrenok_wrapper">
              <div className="logoZubrenok_img">
                <img src={logo} alt="Logo Zubrenok" />
              </div>
              <div className="logoZubrenok_title">ОЛ "Зубренок"</div>
            </div>
            <div className="coordinates_text">
              22224, Минская область, Смолевичский район, д. Волма, расположен в
              35 км от г. Минска
            </div>
            <div className="yandexMap">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A983f4764ff2381fc5da4e480dd4b10fa9c11a107658994574af844eb2456fa7d&amp;source=constructor"
                width="500"
                height="500"
                frameborder="0"
                className="iframe_yandexMap"
              ></iframe>{" "}
            </div>
          </div>
          <div className="contacts_wrapper">
            <div className="contacts_phones_files_wrapper">
              <div className="contacts_title">Телефоны:</div>
              <div className="contacts_phones_info">
                ОТДЕЛ РЕАЛИЗАЦИИ ПУТЕВОК:
              </div>
              <div className="contacts_phones_info">
                <div>Максимович Наталья Михайловна</div>
                <div>Тел/факс: 8-017-217-20-27</div>
              </div>
            </div>
            <div className="contacts_phones_files_wrapper">
              <div className="contacts_title">Файлы:</div>
              <div className="contacts_files_download">
                <div>
                  <a
                    href={isChecked ? "#" : undefined}
                    onClick={(e) => {
                      if (!isChecked) {
                        e.preventDefault();
                      }
                    }}
                    className={isChecked ? "link_download" : "link_block_download"}
                  >
                    Скачать
                  </a>{" "}
                  форму заявления
                </div>
                <div>(для физических лиц)</div>
              </div>
              <div className="contacts_files_download">
                <div>
                  <a
                    href={isChecked ? "#" : undefined}
                    onClick={(e) => {
                      if (!isChecked) {
                        e.preventDefault();
                      }
                    }}
                    className={isChecked ? "link_download" : "link_block_download"}
                  >
                    Скачать
                  </a>{" "}
                  форму гарантийного письма
                </div>
                <div>(для юридических лиц)</div>
              </div>
              <div className="contacts_files_info">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  name="coordination"
                  id="coordination"
                  className="coordination_checkbox"
                />
                <label for="coordination" className="coordination_label">
                  Я согласен на обработку персональных данных
                </label>
              </div>
            </div>
          </div>
          <div className="menu_wrapper">
            <div className="menu_title">Меню:</div>
            <div className="menu_text">
              <a>О нас</a>
            </div>
            <div className="menu_text">
              <a>Новости</a>
            </div>
            <div className="menu_text">
              <a>График заездов</a>
            </div>
            <div className="menu_text">
              <a>Распорядок дня в лагере</a>
            </div>
            <div className="menu_text">
              <a>Обращение граждан</a>
            </div>
          </div>
          <div className="logoMAZ_wrapper">
            <div className="logoMAZ">
              <img src={logoMAZ} alt="Logo MAZ" />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_text">
            © 2025 Сайт. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
