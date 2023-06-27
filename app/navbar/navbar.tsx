import Link from "next/link";
import style from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.navbar_container}>
            <ul className={style.ul_container}>
                <li className={style.navbar_link}>
                    <Link href="/">Home</Link>
                </li>
                <li className={style.navbar_link}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={style.navbar_link}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar