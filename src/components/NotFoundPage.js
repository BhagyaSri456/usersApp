import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <div className="error-page">
                <div><b>404</b> Page Not Found!!</div>
                <Link to="/login">Login to view users</Link>
            </div>
        </>
    );
}

export default NotFoundPage;