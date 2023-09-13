import { useDebugValue } from "react"
import useData from "./useData"

const UseDebugValue = () => {
   useData()

   useDebugValue('Test')

   return <div>Use Debug Component</div>
}

export default UseDebugValue