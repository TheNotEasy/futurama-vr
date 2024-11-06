'use client'

import { useState, PropsWithChildren, Dispatch } from "react";
import Image from "next/image";

import More from "@/app/static/More.png"

type MenuButtonProps = {
  state: Dispatch<boolean>
}

function MenuButton(props: MenuButtonProps) {
  return <>
    <a href="#" onClick={() => props.state(true)}>
      <Image src={More} alt={"Меню"}></Image>
    </a>
  </>
}

export default function Menu(props: PropsWithChildren) {
  const [showMenu, setShowMenu] = useState(false);

  return <>
    <MenuButton state={setShowMenu} />
    {showMenu && (<div className="absolute right-0 top-0 bg-primary w-9">
      test
    </div>)}
  </>
}