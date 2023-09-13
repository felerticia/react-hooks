import { useRef } from "react";

export default function ClickCounter() {
    const ref = useRef(0)
    
    const handleClick = () => {
        ref.current ++;
        console.log(`Clicked ${ref.current} times`);
    };

    console.log('I was rendered!');

    return <div>
        <button onClick={handleClick}>Click</button>
    </div>
}