import React, { Component } from 'react';
import logo from '../theme/css/logo.svg';
import { Link } from 'react-router-dom'
import Footer from '../theme/Footer'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            REACT WITH DYNAMIC ROUTES
          </p>
          <Link to='/user' style={{ color: 'white' }}>User Page</Link>
          <Link to='/login' style={{ color: 'white' }}>Exit</Link>
          <br/>
          <br/>
          <Footer />
        </header>
      </div>
    );
  }
}

export default Home;
