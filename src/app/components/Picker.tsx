import { Dispatch } from "react";

type PickerProps = {
  setState: Dispatch<number>
  entries: Array<string>
  state: number
}

export default function Picker({ setState, entries, state }: PickerProps) {
  return <div className="flex justify-between w-full border-2 border-primary rounded-[10px] h-[100px]">
    {entries.map((entry, index) => (
      <div onClick={() => setState(index)} className={`transition w-full flex justify-center items-center ${(state === index) && "bg-primary"} text-[20px] md:text-[30px]`} key={index}>{entry}</div>
    ))}
  </div>
}