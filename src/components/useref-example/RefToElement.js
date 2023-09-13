import { useRef } from "react";

export default function RefToCounter() {
    const ref = useRef()
    
    const handleClick = () => {
        const input = ref.current
        input.focus();
    };


    return <div>
        <input type="text" ref={ref}/>
        <button onClick={handleClick}>Click</button>
    </div>
}