import React, { Component } from 'react';
import logo from '../theme/css/logo.svg';
import { Link } from 'react-router-dom'
import Footer from '../theme/Footer'
class Login extends Component {
    render() {
        return (
            <div className="Home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        LOGIN IN REACT DYNAMIC ROUTES
                    </p>
                    <label >Login:</label>
                    <input value="admin" className="App-Input"></input>
                    <label>Senha:</label>
                    <input value="admin" className="App-Input"></input>
                    <br />
                    <Link to='/home' style={{ color: 'white' }}>Log In</Link>
                    <br />
                    <br />
                    <Footer />
                </header>
            </div>
        );
    }
}

export default Login;
