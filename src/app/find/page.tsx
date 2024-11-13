'use client'

import Block from "@/app/components/Block";

import Image from "next/image";

import findfiller from "@/app/static/findfiller.png"
import { FormEvent, useRef, useState } from "react";
import { getRequest } from "@/app/crud";
import Form from "@/app/blocks/Form";
import { IRequest } from "@/app/db";
import { entries, prices } from "@/app/consts";

type RequestStatus = 'declined' | 'approved' | 'waiting' | null;

export default function Page() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestRef = useRef<IRequest>(undefined as unknown as IRequest);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const id = formData.get("id") as string;

    const request = await getRequest(id);
    if (request === undefined) {
      setError('Заявка не найдена.')
    } else {
      requestRef.current = request;
      setReady(true);
    }
  }
  if (!ready)
    return <Block>
      <form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
        <input type="text" className="input w-full" placeholder="Уникальный код заявки" name="id" required />
        <input type="submit" className="input w-full" value="Найти" />
      </form>
      <Image src={findfiller} alt={""} className="mx-auto mt-[100px]"></Image>
    </Block>
  else {
    const request = requestRef.current as IRequest;
    return <Form title={entries[request.type]} price={prices[request.type]} isUpdate={true} id={request.id} type={request.type} values={request} />
  }
}