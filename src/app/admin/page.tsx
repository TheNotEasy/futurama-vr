'use client';

import Block from "@/app/components/Block";
import { FormEvent, useState } from "react";
import { authAdmin } from "@/app/crud";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [error, setError] = useState<string>();
  const router = useRouter();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const password = formData.get("password") as string;
    const login = formData.get("login") as string;
    const success = await authAdmin(login, password);
    if (!success) {
      setError("Неверные данные");
    } else {
      router.push("panel?key=secretKey");
    }
  }

  return <Block>
    <form onSubmit={onSubmit}>
      <input type="text" className="input" placeholder="Логин" name="login" />
      <input type="password" className="input" placeholder="Пароль" name="password" />
      <input type="submit" className="input" value="Войти" name="password"/>
      <p className="text-red-600">{error}</p>
    </form>
  </Block>
}