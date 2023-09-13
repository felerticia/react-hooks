import React, { useEffect, useState, useTransition } from 'react';

const UseTransitionHook  = () => {

    const [users,setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState([]);

    const [isPending,startTransition] = useTransition()

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=100')
            .then(res => res.json())
            .then(res => {
                setUsers(res.users)
                setFiltered(res.users)
            })
    },[])

    const handleChange = e => {
        setSearchTerm(e.target.value);
        startTransition(() =>{
            setFiltered(users.filter(user => user.firstName.includes(e.target.value)));
        })
    };

    if (!users)
        return <div>Loading...</div>

    return <div>

        <input 
            onChange={handleChange} 
            value={searchTerm} 
            type="text"/>

        {isPending
        ? 'Loading'
        : <div className='grid'>
            {filtered.map(user => 
                <div className="card" key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                    <img src={user.image} alt={user.firstName}/>
                </div>)
            }
        </div>
        }

    </div>
}

export default UseTransitionHook