import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { startLogin, logout } from "../actions/userDetails";

export class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        e.persist();
        this.setState(() => ({ [e.target.name]: e.target.value }));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        const loginData = { "email": this.state.email, "password": this.state.password };
        this.props.startLogin(loginData);
    }
    componentDidMount() {
        this.props.logout();
    }
    render() {
        const { authError, isLoggedIn } = this.props;
        if (isLoggedIn) return <Redirect to="/dashboard" />
        return (
            <div className="box-layout" >
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">React Login</h2>
                    <div className="form-group">
                        <input
                            id="inputEmail"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Enter password"
                            onChange={this.handleChange}
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authError,
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => ({
    startLogin: (loginInput) => dispatch(startLogin(loginInput)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);