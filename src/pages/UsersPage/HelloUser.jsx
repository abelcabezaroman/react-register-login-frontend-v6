import React, { useEffect, useState } from 'react'
import { API } from '../../shared/services/api';

export default function UsersPage () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get('users').then(res => {
            console.log('##ABEL## >> default >>  res', res);
            setUsers(res.data.docs);
        })
    }, [])

    return (
        <ul>
            {users.map((user, index) => <li key={index}>{user.name}</li>)}
        </ul>
    );
}
