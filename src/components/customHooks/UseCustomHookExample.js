import useOnline from "./useOnline"

const UseSyncExample = () => {
    const isOnline = useOnline()
    return <div>{isOnline ? 'Connected' : 'Disconnected'}</div>
}

export default UseSyncExample