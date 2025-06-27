import "./page.css";
import "../styles/global.css";
import Banner from "./sections/banner/banner";
import Races from "./sections/races/races";
import About from "./sections/about/about";
import Routine from "./sections/routine/routine";
import Tentcamp from "./sections/tentcamp/tentcamp";
import Questions from "./sections/questions/questions";
import News from "./sections/news/news";
import Footer from "./footer/footer";

function Page() {
  return (
    <div className="page">
      <main className="main">
        <div className="main__content">
          <Banner />
          <Races />
          <About />
          <Routine />
          <Tentcamp />
          <Questions />
          <News />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
