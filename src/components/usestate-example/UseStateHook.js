import { useState } from "react"

const Simple = () => {
   const [profile,setProfile] = useState({
    name : 'Amir',
    colors : ['blue,green','red'],
    address : {
        street : 'somewhere',
        city : 'city'
    }
   })

    const updateStreet = (value) => {
        setProfile({
            ...profile,
            colors : [...profile.colors],
            address : {
                ...profile.address,
                street : value
            }
        })
    }

    return <div>
        <input type='text' onChange={e => updateStreet(e.target.value)}></input>
    </div>
}

export default Simple