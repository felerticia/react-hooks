import { useRef } from 'react';
import Modal from './Modal';

const UseImperativeHandleExample = () => {

    const ref = useRef()

    const handleOpenModal = () => ref.current.openModal()

    console.log('I rendered');

    return <div>
        <p>This is a parent component</p>
        <button onClick={handleOpenModal}>Open modal</button>

        <Modal ref={ref}/>
    </div>

}

export default UseImperativeHandleExample;
