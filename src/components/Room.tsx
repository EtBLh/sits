import React,{useState} from 'react';
import {useStore} from 'reto';
import Store from '../store';
import Desk from './Desk';
import deskType from '../desk'
import './Room.scss'

const Room = () => {
    const store = useStore(Store);
    const [deskIDList, setdeskIDList] = useState<number[]>([]);
    
    return (
        <div id="room">
            {
                deskIDList.map((ID:number,index) => {
                    return <Desk key={index} ID={ID}/>
                })
            }
            <button onClick={() =>{ 
                store.addDesk()
                setdeskIDList([...deskIDList, store.DH_Table.length]);
                }}/>
        </div>
    )
}

export default Room;