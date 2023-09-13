import { useEffect, useLayoutEffect, useState } from "react"

const UseLayoutEffectHook = () => {

    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(1000 + Math.random() * 1000);
        }
    }, [value]);

    return <div>
        <p>{value}</p>
        <button onClick={() => setValue(0)}>Reset</button>
    </div>
}

export default UseLayoutEffectHook