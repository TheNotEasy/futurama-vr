import Block from "@/app/components/Block";

import telegram from "@/app/static/telegram.svg"
import whatsapp from "@/app/static/whatsapp.svg"
import geo from "@/app/static/place.svg"

import Image from "next/image";
import Link from "next/link";

const links = {
  "2GIS": "https://go.2gis.com/0a4o2",
  "TG": "https://t.me/futuramaVRberd",
  "WA": "https://wa.me/79243636595"
}

export default function Footer() {
  return <Block>
    <div className="flex justify-between pb-10 mt-20">
      <div className="flex gap-[30px]">
        <Link href={links["TG"]}><Image src={telegram} alt={"telegram"} /></Link>
        <Link href={links["WA"]}><Image src={whatsapp} alt={"whatsapp"} /></Link>
      </div>
      <Link href={links["2GIS"]}><Image src={geo} alt={"2gis"} /></Link>
    </div>
  </Block>
}