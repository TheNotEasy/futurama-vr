import logo from "@/app/static/logo.png"

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return <div className="h-[100px] container flex">
    <div className="w-full rounded-2xl flex justify-between items-center">
      <Link href="/"><Image src={logo} alt={"futurama"}></Image></Link>
      <ul className="flex items-center gap-[30px] sm:gap-[70px] text-links">
        <li><Link href="/">Домой</Link></li>
        <li><Link href="/library">Библиотека</Link></li>
        <li><Link href="/find">Найти заявку</Link></li>
      </ul>
    </div>
  </div>
}