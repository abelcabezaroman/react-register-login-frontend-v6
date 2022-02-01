import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute ({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
