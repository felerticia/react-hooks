import { memo } from "react";

const Button = ({onClick}) =>{
    console.log('rendered');
    return <button onClick={onClick}>+</button>
}

export default memo(Button)