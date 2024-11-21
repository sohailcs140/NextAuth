import Link from "next/link"
import style from "@/styles/header.module.css";


export default function Header() {
  return (
    <header className={style.header}>
        <Link href={"/"}>LoGo</Link>
        <ul className={style.navlinks}>
            <li className={style.navlink}>
                <Link href={"/posts"}>Posts</Link>
            </li>
        </ul>
    </header>
  )
}
