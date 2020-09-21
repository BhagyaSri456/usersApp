import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, deleteUserData } from '../actions/userDetailsActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const UserDetails = (props) => {
    const dispatch = useDispatch();
    const { viewUser } = useSelector(state => state);
    const { avatar: profilePic, first_name, last_name, email } = viewUser;

    useEffect(() => {
        const id = parseInt(props.match.params.id);
        dispatch(getUserDetails(id));
    }, []);

    const handleDelete = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Do you want to delete this user details?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const id = parseInt(props.match.params.id);
                        dispatch(deleteUserData(id));
                        props.history.push('/dashboard');
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }

    if (!viewUser) return (<div className="user-details font-weight-bold">Loading...</div>);
    return (
        <div>
            <button className="btn btn-link">
                <Link to="/dashboard">Go to Dashboard</Link>
            </button>
            <div className="user-details">
                <img src={profilePic} width="180" height="180" />
                <div className="user-email">{email}</div>
                <div className="user-name">{`${first_name}${last_name}`}</div>
                <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default UserDetails;

