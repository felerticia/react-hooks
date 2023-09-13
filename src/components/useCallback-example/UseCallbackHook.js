import { useCallback, useState } from "react";
import Button from "./Button";

const UseCallBackExample = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
  
    const increment1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])

    const increment2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])

 
    return <div>
        Count1: {count1}
        <Button onClick={increment1}>+</Button>

        Count2: {count2}
        <Button onClick={increment2}>+</Button>
    </div>
}



export default UseCallBackExample
