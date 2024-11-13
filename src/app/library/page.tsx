import Block from "@/app/components/Block";

import library from "@/app/static/library.png"

import Image from "next/image";

export default function Library() {
  return <Block>
    <div className="flex flex-col w-full">
      <h1 className="mx-auto">Библиотека игр</h1>
      <Image src={library} alt={"библиотека"} className="mx-auto"></Image>
    </div>
  </Block>
}