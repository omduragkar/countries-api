import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const Nav = () => {
    // Since histroy will be used to on click event:
    const history = useHistory();
    // Function that will refresh page as a new page with removing all localStorage options:
    const refresh = ()=>{
        localStorage.clear();
        history.push("/");
        window.location.reload();
    }
    // Creating nav:
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to="/">
                    <h2 className="navbar-brand">COUNTRIES API by Om</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        
                        <li className="nav-item">
                        <a className="nav-link" href="https://github.com/omduragkar/countries-api" target="_blank" rel = "noreferrer">Link to Repository</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/readme">
                                <span className="nav-link">Readme</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">extra Links</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="https://www.linkedin.com/in/omaduragkar/" target={"_blank"} rel="noreferrer">Connect on Linkedin </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://github.com/omduragkar" target={"_blank"} rel="noreferrer">GITHUB</a>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className="d-flex mx-auto text-center ">
                    {/* On click refresh button */}
                    <button className="btn btn-secondary my-2 my-sm-0" onClick={refresh}>Refresh</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
