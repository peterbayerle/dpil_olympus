import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

class Footer extends React.Component {
    refresh() {
        window.location.reload(); 
    }

    render() {
        return (
            <Navbar className="footer"  fixed="bottom" expand="lg">
                {/* center justified content */}
                <ul className="navbar-nav mx-auto text-md-center text-left justify-content-between">
                    <div>
                        <span className="pr-4">
                            <Button variant="link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-house" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </Button>
                        </span>
                        <span className="pl-4 pr-4">
                            <Button variant="link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </Button>
                        </span>
                        <span className="pl-4">
                            <Button variant="link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </Button>
                        </span>
                    </div>
                </ul>
            </Navbar>
        );
    };
};

export default Footer;
