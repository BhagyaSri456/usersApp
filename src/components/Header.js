import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userDetailsActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const Header = (props) => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.email);

    const handleLogout = () => {
        confirmAlert({
            title: 'Confirm to logout',
            message: 'Do you want to logout',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(logout())
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }
    return (
        <div className="d-flex header">
            <span className="project-name">
                React JS
            </span>
            <div className="user-wrapper">
                <span>{email}</span>
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Header;