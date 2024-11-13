'use client';

import Block from "@/app/components/Block";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function SuccessCreatePage() {
  const params = useSearchParams();
  const id = params.get("id");

  return <Block>
    <h1>Готово! Сохраните И НЕ ТЕРЯЙТЕ этот код: {id}</h1>
    <Link href='/' className="text-3xl">Вернуться на главную</Link>
  </Block>
}