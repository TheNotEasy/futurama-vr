'use client';

import Block from "@/app/components/Block";
import { Dispatch, useEffect, useRef, useState } from "react";
import Picker from "@/app/components/Picker";
import { listActiveRequests, listArchiveRequests, responde } from "@/app/crud";
import { IRequest } from "@/app/db";
import { entries, prices } from "@/app/consts";
import Form from "@/app/blocks/Form";
import Button from "@/app/components/Button";
import { useSearchParams } from 'next/navigation'

type Props = {
  request: IRequest;
  rerender: Dispatch<any>;
  value: boolean;
}

function Request({request, rerender, value}: Props) {
  const [open, setOpen] = useState(false);
  const params = useSearchParams();

  return <>
    <h1 onClick={() => setOpen(!open)} className="mx-auto">{entries[request.type]}</h1>
    {open && <div>
        <Form title={entries[request.type]} price={prices[request.type]} id={request.id} type={request.type}
                        values={request} fromAdmin={true}/>
        <div className="mx-auto w-fit flex flex-row container gap-5">
            <Button href="#" onClick={() => {
              responde(request.id, 'approved').then(() => rerender(!value));
            }}>Принять</Button>
            <Button href="#" onClick={() => responde(request.id, 'declined')}>Отклонить</Button>
        </div>
    </div>}

  </>
}

export default function () {
  const entries = ['Неотвеченные', 'Архив']
  const [entry, setEntry] = useState(0)
  const [loading, setLoading] = useState<boolean>(true);
  const [_, rerender] = useState(false);

  const active = useRef<IRequest[]>([]);
  const archive = useRef<IRequest[]>([]);

  useEffect(() => {
    const promises= [
      listActiveRequests().then((requests) => {active.current = requests}),
      listArchiveRequests().then((archives) => {archive.current = archives}),
    ]
    Promise.all(promises).then((res) => {setLoading(false)})
  }, []);

  if (loading) {
    return <Block>Загрузка...</Block>;
  }

  console.log(active)

  return <>
    <Block>
      <div className="flex flex-col justify-center">
        <Picker entries={entries} state={entry} setState={setEntry} />
      </div>
    </Block>
    {entry == 0 ? active.current.map((r) => <Request request={r} rerender={rerender} value={_}></Request>) : archive.current.map((r) => <Request request={r}></Request>)}
  </>
}