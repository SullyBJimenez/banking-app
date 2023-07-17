import React, {useEffect} from 'react';
import { useData } from '../useData.js';
import { Card } from './context.js';

export function LoginSuccess() {

    const {name, setName, balance, setBalance} = useData();
    useEffect(() => {
        setName(localStorage.getItem('name'))
        setBalance(localStorage.getItem('balance'))
    },)
    
    console.log("loginsucess name", name)
    return (
        <Card
        bgcolor="primary"
        header={`Login Successful, Hello ${name}`}
        body= {`Your total balance: ${balance}`}
        />
    )
}