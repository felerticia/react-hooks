import React, { useContext } from 'react';
import TitleContext from './Context';

function Title({title}) {
    
    const Title = useContext(TitleContext)

    return <h2>{Title}</h2>
}

export default Title;
