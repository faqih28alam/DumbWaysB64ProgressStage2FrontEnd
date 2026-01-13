// counter.tsk

//implement props
type CounterProps = {
    count: number

}

export default function Counter({count}: CounterProps) {
    return (
        <div>
            Uncompleted Task: {count}
        </div>
    )
}

export function CounterProfile( {text}: {text:string}) {
    return (
        <>
            <p>
                {text}
            </p>
        </>
    )
}