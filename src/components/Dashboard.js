import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetUsers, prevPage, nextPage } from '../actions/userDetails';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.GetUsers();
    }
    prevPage = () => {
        this.props.prevPage(this.props.page);
        this.props.GetUsers();
    }
    nextPage = () => {
        this.props.nextPage(this.props.page);
        this.props.GetUsers();
    }

    renderUsersData = () => {
        if (this.props.usersList.length <= 0) return (<tr><td colSpan="3" className="text-center">No data Found</td></tr>)
        return this.props.usersList.map((user, index) => {
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
    render() {
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
                        {this.renderUsersData()}
                    </tbody>
                </table>
                <div className="buttons-wrapper">
                    <button onClick={this.prevPage} disabled={this.props.page > 1 ? false : true}>&lt;</button>
                    <span>{this.props.page}</span>
                    <button onClick={this.nextPage}
                        disabled={this.props.usersList.length <= 0 ? true : false}
                    >&gt;</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usersList: state.users,
        page: state.page
    }
}
const mapDispatchToProps = (dispatch) => ({
    GetUsers: (page) => dispatch(GetUsers(page)),
    prevPage: (page) => dispatch(prevPage(page)),
    nextPage: (page) => dispatch(nextPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);