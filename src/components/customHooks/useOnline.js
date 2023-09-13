import { useSyncExternalStore } from "react"

const getSnapshot = () => {
    return navigator.onLine
}

const subscribe = listener => {
    window.addEventListener('online',listener)
    window.addEventListener('offline',listener)
    
    return () => {
        window.removeEventListener('online',listener)
        window.removeEventListener('offline',listener)
    }
}

const useOnline = () => {
    
    const isOnline = useSyncExternalStore(subscribe,getSnapshot)
    return isOnline
}

export default useOnline