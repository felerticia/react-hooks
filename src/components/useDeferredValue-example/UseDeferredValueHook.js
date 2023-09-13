import React, { useState } from 'react';
import List from './List';


const UseDeferredValueHook  = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return <div>
        <input 
            onChange={handleChange} 
            value={searchTerm} 
            type="text"
            placeholder="Type a name" />

        <List searchTerm={searchTerm}/>
    </div>
}

export default UseDeferredValueHook