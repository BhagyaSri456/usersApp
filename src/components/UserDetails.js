import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDetails, deleteUserData } from '../actions/userDetails';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class UserDetails extends Component {
    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        this.props.getUserDetails(id);
    }
    handleDelete = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Do you want to delete this user details?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const id = parseInt(this.props.match.params.id);
                        this.props.deleteUserData(id);
                        this.props.history.push('/dashboard');
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }
    render() {
        const { avatar: profilePic, first_name, last_name, email } = this.props.userData;
        if (!this.props.userData) return (<div className="user-details font-weight-bold">Loading...</div>);
        return (
            <div className="user-details">
                <img src={profilePic} width="180" height="180" />
                <div className="user-email">{email}</div>
                <div className="user-name">{`${first_name}${last_name}`}</div>
                <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { userData: state.viewUser }
}
const mapDispatchToProps = (dispatch) => ({
    getUserDetails: (userData) => dispatch(getUserDetails(userData)),
    deleteUserData: (id) => dispatch(deleteUserData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);