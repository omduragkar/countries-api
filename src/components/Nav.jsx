import React from 'react'

const Nav = () => {
    // const history = useHistory();
    const refresh = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">COUNTRIES API by Om</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Link to Github</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Readme</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About Me</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">extra Links</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Connect </a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                        </li>
                    </ul>
                </div>
                <div class="d-flex mx-auto text-center ">
                    <button class="btn btn-secondary my-2 my-sm-0" onClick={refresh}>Refresh</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
