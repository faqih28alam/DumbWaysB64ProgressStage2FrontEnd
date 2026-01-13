// button.tsx

//implement props
type ButtonProps = {
    text: string;
    evetOnClick: () => void;           // to handle click
}

export default function Button({ text, evetOnClick }: ButtonProps) {

    return (
        <button onClick={evetOnClick}>{text}</button>
    )       
}


