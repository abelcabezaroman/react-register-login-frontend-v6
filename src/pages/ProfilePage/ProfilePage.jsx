import React from 'react'

export default function ProfilePage () {
    const user = JSON.parse(localStorage.getItem('user'));

    return (<div>
        Hello {user.name}
    </div>);
}
