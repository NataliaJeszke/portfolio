import portfolio from "../assets/art.jpg";
import Image from "next/image";
import style from "./main.module.css";
import Link from "next/link";

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
        <h1>Frontend Developer</h1>
        <h3>With a bit of fullstack spice!</h3>

        <Link href="/projects">Click here to see my projects</Link>
      </div>
    </div>
  );
};

export default Main;
