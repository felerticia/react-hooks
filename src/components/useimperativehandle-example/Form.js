import { useEffect, useRef } from "react";
import Input from "./Input";

export default function Header() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.myfocus()
    },[])

    return <div>
        <Input />
        <Input ref={inputRef}/>
        <Input />
        <button onClick={() => inputRef.current.myfocus()}>
            Focus
        </button>
    </div>
}
