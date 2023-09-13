import { useDebugValue, useState } from "react"

const getData = () => ({name: 'Amir'})

const useData = () => {
    const [data, setData] = useState(getData())
  
    useDebugValue(data)
    useDebugValue({x: 5})
  
    return [data, setData]
}

export default useData