import {  useEffect, useInsertionEffect, useLayoutEffect, useState } from "react";

const UseInsertionEffectHook = () => {
    const [theme,setTheme] = useState('dark')
    
    useInsertionEffect(() => {
        const styleRule = getStyleRule(theme);

        document.head.appendChild(styleRule);

        return () => document.head.removeChild(styleRule)
    },[theme])

    return <button onClick={() => setTheme(theme === 'dark' ? 'white' : 'dark')}>Change theme</button>
}

const getStyleRule = theme =>{
    const tag = document.createElement('style')
    tag.innerHTML = `
        html,button {
            color : ${theme === 'dark' ? 'white' : 'black'};
            background-color : ${theme === 'dark' ? 'black' : 'white'};
            border : 1px solid ${theme === 'dark' ? 'white' : 'black'};
        }

    `

    return tag
}

export default UseInsertionEffectHook
