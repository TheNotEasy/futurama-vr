'use client'

import Picker from "@/app/components/Picker";
import Block from "@/app/components/Block";

import {useState} from "react";
import Form from "@/app/blocks/Form";

import { entries, prices } from "@/app/consts";

export default function Page() {
  const [page, setPage] = useState(0);

  return <>
    <Block><Picker setState={setPage} entries={entries} state={page} /></Block>
    <Form title={entries[page]} price={prices[page]} type={page}></Form>
  </>
}