import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = (props,ref) => {

    const inputRef=useRef()

    useImperativeHandle(ref, () => ({
        myfocus : () => inputRef.current.focus()
    }))

    return <input type="text" ref={inputRef} {...props}/>
};

export default forwardRef(Input)