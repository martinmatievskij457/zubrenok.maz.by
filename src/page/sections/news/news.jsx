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
    <div className="news" id="news">
      <div className="news__title">
        <div className="news__title__text">Фото жизни лагеря:</div>
      </div>
      <div className="news__photo">
        <div className="news__photo-wrapper">
          {photos.map((photo, index) => (
            <img
              src={photo.src}
              alt={photo.name}
              key={index}
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            />
          ))}
        </div>
      </div>
      <div className="news__button">
        <div className="news__button-wrapper">
          <a href="https://www.instagram.com/zubrenok_maz/" target="_blank">
            Больше фотографий
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
