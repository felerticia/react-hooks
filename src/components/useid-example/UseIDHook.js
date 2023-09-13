import { useId } from "react"

const UseIDExample = () => {

    const id = useId();
    return <>
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input id={`${id}-email`} type="email" />
        </div>
        <div>
            <label htmlFor={`${id}-password`}>Password</label>
            <input id={`${id}-password`} type="password" />
        </div>
    </>
}

export default UseIDExample