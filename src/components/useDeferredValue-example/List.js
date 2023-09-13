import { useDeferredValue, useMemo } from "react";

const numbers = [...new Array(10_000).fill(0).map(_ => Math.random().toString())];

const List = ({searchTerm}) => {

    const def = useDeferredValue(searchTerm)

    const list = useMemo(() => (
        numbers.filter(num => num.includes(def))
        .map(num => <p>{num}</p>)
    ), [def]);
    
    return <div>
        {list}
    </div>
}

export default List