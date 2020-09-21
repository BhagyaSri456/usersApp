import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Input from './InputComponent';
import { userFetch, logout } from "../actions/userDetailsActions";


const LoginPage = (props) => {
    const { authError } = useSelector(state => state);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //on load
    useEffect(() => {
        dispatch(logout());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        dispatch(userFetch({ email, password }));
    }

    return (
        <div className="box-layout" >
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">React Login</h2>
                <div className="form-group">
                    <Input
                        id="inputEmail"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        onChange={(e) => { const value = e.target.value; setEmail(value) }}
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="password"
                        name="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Enter password"
                        onChange={(e) => { const value = e.target.value; setPassword(value) }}
                    />
                </div>
                <button className="btn btn-primary btn-block">Login</button>
                {authError && <p className="info-error">{authError}</p>}
            </form>
            <p className="text-center">
                <button className="btn btn-link ml-auto">
                    <Link to="/register">Register</Link>
                </button>
            </p>


        </div>
    );
}

export default LoginPage;