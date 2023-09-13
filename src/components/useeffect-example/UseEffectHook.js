import { useEffect, useState } from "react"

const UseEffectHook = () => {

    const [users,setUsers] = useState([])

    useEffect(() => {
        async function getUsers () {
            const res = await fetch('/url')
            const json = res.json()
            setUsers(json)
        }

        getUsers()
    },[])

    return <div>{users.map(user => <div>{user.name}</div>)}</div>
}

export default UseEffectHook