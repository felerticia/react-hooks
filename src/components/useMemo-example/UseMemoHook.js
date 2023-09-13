import { useMemo, useState } from "react"

const UseMemoHook = () => {

    const [counter,setCounter] = useState(0)
    const expensiveFunc = () =>{
        for (let i = 0; i < 1000000000; i++) {
                        
        }

        console.log('function executed')
        return 'Memo'
    }

    const value = useMemo(() => expensiveFunc(), [counter]);
    return <div>
        {value}
        {counter}
        <button onClick={() => setCounter(counter => counter+1)}>+</button>
    </div>
}



export default UseMemoHook
