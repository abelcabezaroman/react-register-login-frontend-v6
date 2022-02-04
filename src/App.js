import React, { useState } from 'react';
import './App.css';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import AuthButton from "./shared/components/AuthButton/AuthButton";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { JwtContext } from './shared/contexts/JwtContext';
import RequireAuth from "./shared/components/RequireAuth/RequireAuth";
import LoginPage from "./pages/LoginPage/LoginPage";
import UsersPage from "./pages/UsersPage/HelloUser";

function App () {
    const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

    return (
        <JwtContext.Provider value={{ jwt, setJwt }}>
            <div className="App">
                <div className="App-header">
                    <BrowserRouter>
                        <AuthButton/>

                        <nav>
                            {jwt && <NavLink className="b-btn" to="/hello-user">Profile</NavLink>}
                            {jwt && <NavLink className="b-btn" to="/users">Users</NavLink>}
                            <NavLink className="b-btn" to="/register">Register</NavLink>
                            {!jwt && <NavLink className="b-btn" to="/login">Login</NavLink>}
                        </nav>


                        <Routes>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/profile" element={<RequireAuth><ProfilePage/></RequireAuth>}/>
                            <Route path="/users" element={<RequireAuth><UsersPage/></RequireAuth>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route
                                path="/"
                                element={<Navigate to="/login"/>}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </JwtContext.Provider>
    );
}

export default App;
