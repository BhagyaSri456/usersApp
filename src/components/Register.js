import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { registration, logout } from '../actions/userDetails';

export class Register extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        e.persist();
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        const userData = { "email": this.state.email, "password": this.state.password };
        this.props.registration(userData);
    }
    componentDidMount() {
        this.props.logout();
    }
    render() {
        const { info, status } = this.props;
        if (status) return <Redirect to="/login" />
        return (
            <div className="box-layout">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Registration Form</h2>
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
                    <button type="submit" className="btn btn-primary btn-block mr-4">
                        Submit
                        </button>
                    <p className="info-error">{info}</p>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        info: state.info,
        status: state.status
    }
}
const mapDispatchToProps = (dispatch) => ({
    registration: (userData) => dispatch(registration(userData)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);