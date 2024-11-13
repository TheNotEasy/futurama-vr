import {PropsWithChildren} from "react";

type BlockProps = PropsWithChildren<{
  className?: string;
}>

export default function Block(props: BlockProps) {
  return <div className={`container flex flex-col ${props.className}`}>
    {props.children}
  </div>
}