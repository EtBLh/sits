import React from 'react';
import {useStore} from 'reto';
import Store from '../store'
import './Desk.scss'

const Desk = (props) => {
    const store = useStore(Store);

    return (
        <div className='desk'>
            {/* <a href={()=>{}}>Amount</a> */}
            {
                store.DH_Table[props.ID].human.map((name,index) => {
                    return <div className='human' key={index}>{name}</div>
                })
            }
        </div>
    )
}

export default Desk;