import React, { useState } from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import AuthButton from "./shared/components/AuthButton/AuthButton";
import UsersPage from "./pages/UsersPage/HelloUser";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { JwtContext } from './shared/contexts/JwtContext';

function App () {
    const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

    return (
        <JwtContext.Provider value={{ jwt, setJwt }}>
            <div className="App">
                <div className="App-header">
                    <Router>
                        <AuthButton/>

                        <nav>
                            {jwt && <Link className="b-btn" to="/hello-user">Profile</Link>}
                            {jwt && <Link className="b-btn" to="/users">Users</Link>}
                            <Link className="b-btn" to="/register">Register</Link>
                            {!jwt && <Link className="b-btn" to="/login">Login</Link>}
                        </nav>


                        <Switch>
                            <Route path="/register">
                                <RegisterPage/>
                            </Route>
                            <PrivateRoute path="/profile">
                                <ProfilePage/>
                            </PrivateRoute>
                            <PrivateRoute path="/users">
                                <UsersPage/>
                            </PrivateRoute>
                            <Route path="/login">
                                <LoginPage/>
                            </Route>
                            <Redirect from="/" to="login"/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </JwtContext.Provider>
    );
}

export default App;
