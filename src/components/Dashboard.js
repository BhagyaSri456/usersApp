import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, prevPage, nextPage } from '../actions/userDetailsActions';

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const { page, users: usersList, totalPages } = useSelector(state => state);
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handlePrevPage = () => {
        dispatch(prevPage(page));
        dispatch(getUsers());
    }
    const handleNextPage = () => {
        dispatch(nextPage(page));
        dispatch(getUsers());
    }

    const renderUsersData = () => {
        if (usersList.length <= 0) return (<tr><td colSpan="3" className="text-center">No data Found</td></tr>)
        return usersList.map((user, index) => {
            const { email, first_name, last_name, id } = user;
            return (
                <tr key={id}>
                    <td>{<Link to={`/user/${id}`}>{email}</Link>}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                </tr>
            )
        })
    }

    return (
        <div className="dashboard-wrapper">
            <h3 className="text-center m-2">Dashboard</h3>
            <table id="userTable" className="table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsersData()}
                </tbody>
            </table>
            <div className="buttons-wrapper">
                <button onClick={handlePrevPage} disabled={page <= 1}>&lt;</button>
                <span>{page}</span>
                <button onClick={handleNextPage}
                    disabled={page >= totalPages}
                >&gt;</button>
            </div>
        </div>
    )
}

export default Dashboard;
