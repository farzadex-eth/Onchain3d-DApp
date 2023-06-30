import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container justify-content-between">
                    <a className="navbar-brand" href="/">
                        <img src='logo192.png' alt='logo' width="50px" />
                        <span style={{ margin: '0 0.5rem', display: 'inline-block' }}>OnChain3D</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target='_blank' href="https://goerli.onchain3d.xyz" rel="noreferrer">Goerli</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
