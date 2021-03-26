import React, { Component } from 'react';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            click : 0,
        }
    }

    auClick = () => {
        this.setState({
            click : this.state.click + 1,
        })
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <p onClick = {() => {this.auClick()}} className="navbar-brand">Navbar</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <p onClick = {() => {this.auClick()}}  className="nav-link active" aria-current="page" href="index.html">Home</p>
                                </li>
                                <li className="nav-item">
                                    <p onClick = {() => {this.auClick()}}  className="nav-link" href="index.html">Link</p>
                                </li>
                                <li className="nav-item">
                                    <a id="a" className="nav-link">J'ai été cliqué {this.state.click} fois.</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;