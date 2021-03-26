import React, { Component } from 'react';
import "./Header.css";
import Navigation from '../Navigation/Navigation';
import Searchbar from '../Searchbar/Searchbar';

class Header extends Component {

    render() {
        return(
            <header>
                <div className="header">
                    <Navigation/>
                    <Searchbar/>
                </div>
            </header>
        )
    }

}

export default Header;