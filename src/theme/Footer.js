import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <label>Copyright</label> Glaicon Reis - Full Stack Developer &copy; {new Date().getFullYear()}
            </div>
        )
    }
}