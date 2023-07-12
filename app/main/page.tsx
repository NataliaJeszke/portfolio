import portfolio from "../assets/art.jpg";
import Image from "next/image";
import style from "./main.module.css";
import Heading3 from "./textMainAnimation/heading3";
import ButtonProjects from "./buttonProjects/buttonProjects";
import ButtonsSocial from "./buttonsSocial/buttonsSocial";

const Main = () => {
  return (
    <div className={style.main_cointainer}>
      <div className={style.image_cointainer}>
        <Image
          src={portfolio}
          alt="portfolio image"
          width={400}
          height={500}
          className={style.portfolio_image}
        />
      </div>
      <div className={style.text_cointainer}>
        <h1 className={style.h1}>Frontend Developer</h1>
        <Heading3 />
        <ButtonProjects />
        <ButtonsSocial />
      </div>
    </div>
  );
};

export default Main;
