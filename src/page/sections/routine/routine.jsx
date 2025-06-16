import "./routine.css";
import icon from "../../../assets/images/icon_download.png";

function Routine() {
  return (
    <div className="routine" id="routine">
      <div className="routine_content">
        <div className="wrapper">
          <div className="wrapper_title">
            <div className="wrapper_title_text">Распорядок дня в лагере</div>
          </div>
          <a href="https://maz.by/global/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%B0/%D0%9E%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B8/%D0%A4%D0%B8%D0%BB%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F/%D0%94%D0%9E%D0%9B%20%D0%97%D0%A3%D0%91%D0%A0%D0%95%D0%9D%D0%9E%D0%9A/%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D0%B4%D0%BD%D1%8F%20%D0%B2%20%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%B5.pdf">
            <div className="wrapper_file">
              <div className="file_label">Файл</div>
              <div className="file_icon">
                <img src={icon} alt="Icon download" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Routine;
