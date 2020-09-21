import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Input from './InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { registration, logout } from '../actions/userDetailsActions';

const Register = (props) => {
    const dispatch = useDispatch();
    const { info, status } = useSelector(state => state);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(logout());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        dispatch(registration({ email, password }));
    }

    if (status) return <Redirect to="/login" />
    return (<div className="box-layout">
        <form onSubmit={handleSubmit}>
            <h2 className="text-center">Registration Form</h2>
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
            <button type="submit" className="btn btn-primary btn-block mr-4">
                Submit
                </button>
            <p className="info-error">{info}</p>
        </form>
    </div>);

}

export default Register;
