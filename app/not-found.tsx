import Image from 'next/image';
import panda from "./assets/panda.png"
import Link from 'next/link';
import style from "./page.module.css"

function PageNotFound() {
    
    return (
        <div className={style.not_found}>
            <h1>404 - Page Not Found</h1>
            <Image src={panda} alt="404 panda" />
            <Link className={style.backBtn} href="/">Take me home!</Link>
        </div>
    );
}

export default PageNotFound;