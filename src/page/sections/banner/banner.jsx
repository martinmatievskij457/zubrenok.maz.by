import "./banner.css";
import logo from "../../../assets/images/logo.png";
import eye from "../../../assets/images/eye.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <header className="header">
          <div className="header_content">
            <nav className="navigate">
              <ul className="list">
                <li className="list_item">О нас</li>
                <li className="list_item">Вопросы</li>
                <li className="list_item">Палаточный лагерь</li>
                <li className="list_item">
                  <img src={logo} alt="logo"></img>
                </li>
                <li className="list_item">График заездов</li>
                <li className="list_item">Распорядок дня</li>
                <li className="list_item">
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
            <div className="button">
              <button>Купить путёвку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
