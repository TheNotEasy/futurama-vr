'use client'

import Block from "@/app/components/Block";

import Image from "next/image";

import findfiller from "@/app/static/findfiller.png"
import { FormEvent } from "react";

export default function Page() {
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

  }

  return <Block>
    <form className="flex flex-col gap-[20px]" action="/api/v1/find" method="post">
      <input type="text" className="input w-full" placeholder="Уникальный код услуги" required />
      <input type="submit" className="input w-full" value="Найти" />
    </form>
    <Image src={findfiller} alt={""} className="mx-auto mt-[100px]"></Image>
  </Block>
}