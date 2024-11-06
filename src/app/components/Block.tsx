import {PropsWithChildren} from "react";

export default function Block(props: PropsWithChildren) {
  return <div className="container flex flex-col">
    {props.children}
  </div>
}