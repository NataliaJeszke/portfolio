import linkedin from "../../icon/linkedin.svg";
import pintrest from "../../icon/square-pinterest.svg";
import github from "../../icon/square-github.svg";
import Image from "next/image";
import Link from "next/link";

export default function ButtonsSocial() {
  return (
    <div className="flex flex-row flex-wrap gap-3 justify-center mt-2">
      <Link href={"https://www.linkedin.com/in/natalia-jeszke/"}>
        <Image
          src={linkedin}
          alt="LinkedIn"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link href={"https://pin.it/2nJI2tm"}>
        <Image
          src={pintrest}
          alt="LinkedIn"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link href={"https://github.com/NataliaJeszke"}>
        <Image
          src={github}
          alt="LinkedIn"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
    </div>
  );
}
