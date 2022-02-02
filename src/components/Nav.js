import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Nav extends Component {
    render () {
        return (
            <nav>
                <h1 className="title">
                    <Link to="/">Budget App</Link>
                </h1>
                
                <button className="button">
                <Link to="/newItem">NEW TRANSACTION</Link>
                </button>
                
            </nav>
        )
    }
} 

export default Nav;