import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/userDetails';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class Header extends React.Component {
    handleLogout = () => {
        confirmAlert({
            title: 'Confirm to logout',
            message: 'Do you want to logout',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.props.logout()
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }
    render() {
        return (
            <div className="d-flex header">
                <span className="project-name">
                    React JS
                </span>
                <div className="user-wrapper">
                    <span>{this.props.email}</span>
                    <button className="btn" onClick={this.handleLogout}>Logout</button>
                </div>

            </div >
        )
    }
}
const mapStateToProps = (state) => ({ email: state.email })
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);