'use client'

import Picker from "@/app/components/Picker";
import Block from "@/app/components/Block";

import {useState} from "react";
import Form from "@/app/blocks/Form";

export default function Page() {
  const [page, setPage] = useState(0);

  const entries = ["VR шлем", "PS5", "Аренда зала", "Караоке"]
  const prices = ["650 руб/час", "350 руб/час", "1500 руб/час", "1000 руб/час"]

  return <>
    <Block><Picker setState={setPage} entries={entries} state={page} /></Block>
    <Form title={entries[page]} price={prices[page]}></Form>
  </>
}