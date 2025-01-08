import { useEffect, useState } from "react"


function TimePicker() {
    return (
        <div className="flex w-full">
            <div className="border-primary border-2 rounded text-center p-3">00:00</div>
        </div>
    )
}


export default function DatePicker() {
    const [date, setDate] = useState<string | null>(null);

    const today = new Date();
    const max = new Date();
    max.setFullYear(today.getFullYear() + 1);

    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex items-center justify-center">
            <div className="max-w-[500px] w-full bg-background p-5 rounded-md flex flex-col gap-5">
                <div>
                    <label htmlFor="date">Дата проведения</label>
                    <input min={today.toISOString().split("T")[0]} max={max.toISOString().split("T")[0]}
                     type="date" id="date" className="input w-full" onChange={event => setDate(event.target.value)} />
                </div>

                {date && <TimePicker></TimePicker>}
            </div>
        </div>
    )
}