import { useEffect, useState } from "react";
import "./news.css";

function News() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/data/images.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="news">
      <div className="news_content">
        <div className="news_title_wrapper">
          <div className="news_title_text">Фото жизни лагеря:</div>
        </div>
        <div className="news_photo_wrapper">
          {photos.map((photo, index) => (
            <img src={photo.src} alt={photo.name} key={index} />
          ))}
        </div>
        <div className="news_button_wrapper">
          <div className="news_button">
            <a href="https://www.instagram.com/zubrenok_maz/" target="_blank">
              Больше фотографий
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
