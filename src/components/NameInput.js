import React from 'react';
import {useStore} from 'reto';
import Store from '../store'
import './NameInput.scss'

const NameInput = (props) => {
    const store = useStore(Store);
    return (
        <div id="nameInputArea">
            <h1>{store.nameList}</h1>
            <button onClick={()=>{store.setNameList([...store.nameList, 'fuck'])}}>fuck</button>
        </div>
    )
}

export default NameInput;