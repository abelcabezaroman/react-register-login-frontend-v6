import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";


export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        history.push("/");
    }

    return jwt ? (
        <p>
            Welcome! {user.name}
            <button
                onClick={signOut}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}
