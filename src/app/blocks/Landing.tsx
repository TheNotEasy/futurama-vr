import biglogo from "@/app/static/biglogo.png"

import { Righteous } from "@/app/fonts";
import Block from "@/app/components/Block";

import Image from "next/image";
import Button from "@/app/components/Button";

export default function Landing() {
  return <Block>
    <div className="flex items-center justify-between w-full md:justify-center gap-[20px] flex-col lg:flex-row">
      <div className="text-center md:text-left flex flex-col gap-[50px]">
        <h1 className={`${Righteous.className} text-[30px] md:text-[48px]`}>VR CLUB - FUTURAMA</h1>
        <p className="text-shade md:text-[28px] text-[20px]">Футурама - VR клуб: Погружайтесь в виртуальные миры, играйте в самые крутые игры,
          наслаждайтесь комфортом. Вас ждет невероятное приключение!</p>
        <Button href="/send" className="w-max mx-auto md:mx-0 text-[17px]">Оставить заявку</Button>
      </div>
      <Image src={biglogo} alt={"Bender"} className="md:block hidden h-[655px]"></Image>
    </div>
  </Block>
}