import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './../theme/css/logo.svg';
import Footer from '../theme/Footer'

class UserForm extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        User Page
                    </p>
                    <Link to='/home' style={{ color: 'white' }}>Voltar</Link>
                    <br />
                    <br />
                    <Footer />
                </header>
            </div>
        );
    }
}

export default UserForm;
