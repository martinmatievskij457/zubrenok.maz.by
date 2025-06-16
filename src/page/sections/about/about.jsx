import "./about.css";
import image1 from "../../../assets/images/image1.png"
import image2 from "../../../assets/images/image2.png"
import image3 from "../../../assets/images/image3.png"
import image4 from "../../../assets/images/image4.png"

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
            <div className="block_1_img"><img src={image2} alt="Image 2" /></div>
            <div className="block_1_img"><img src={image1} alt="Image 1" /></div>
            <div className="block_1_img"><img src={image4} alt="Image 4" /></div>
            <div className="block_1_img"><img src={image3} alt="Image 3" /></div>            
          </div>
        </div>
        <div className="about_block_2"></div>
        <div className="about_block_3"></div>
      </div>
    </div>
  );
}

export default About;
