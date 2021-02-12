import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

class Header extends React.Component {
    refresh() {
        window.location.reload(); 
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <img src={"olympus_logo.png"} id="olympusLogo"></img>
                <Navbar.Brand className="pl-2" id="olympusTitle">Olympus</Navbar.Brand>
                <ul className="navbar-nav mx-auto text-md-center text-left"></ul>
                <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                    <Button variant="link" className="float-right" onClick={ this.refresh }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                    <span className="pl-2">Restart</span>
                    </Button>
                </ul>
            </Navbar>
        );
    };
};

export default Header;
