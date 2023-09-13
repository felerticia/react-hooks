import React, { useState } from 'react';
import Form from './Form';
import TitleContext from './Context';

function UseContextExample() {

    const [title,setTitle] = useState('My title')

    return <TitleContext.Provider value={title}>
        <Form/>
        <input onChange={e => setTitle(e.target.value)}/>
    </TitleContext.Provider>
    
}

export default UseContextExample;
