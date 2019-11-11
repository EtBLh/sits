import React, {useState} from 'react';
import desk from './desk'

export default function Store(){
    const [nameList, setNameList] = useState<String[]>([]);
    const [DH_Table, setDH_Table] = useState<desk[]>([]);

    const randomlyAssign = () => {

    }

    const addDesk = (instance:desk = {
        ID: DH_Table.length,
        x:100,
        y:100,
        amount:2,
        human:["",""]
    }) => {
        setDH_Table([...DH_Table,instance])
    }

    const removeDesk = (ID:number) => {
        let tempArray:desk[] = [];
        let reached = false;
        for (let instance of DH_Table){
            if (instance.ID == ID) {
                reached = true;
                continue;
            };
            if(reached){
                let tempDesk:desk = instance;
                tempDesk.ID--; 
                tempArray.push(tempDesk);
            } else {
                tempArray.push(instance);
            }
        }
        setDH_Table(tempArray);
    }

    const changeHuman = () => {

    }

    return {
        nameList,
        setNameList,
        DH_Table,
        addDesk
    }
}