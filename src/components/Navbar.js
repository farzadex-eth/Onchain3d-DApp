import React, { useContext } from 'react'
import WalletContext from '../WalletContext'

function Navbar() {

    const { account, walletConnect, disconnectAccount, truncateAddress } = useContext(WalletContext);
    const nets = [
        "Mainnet",
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container justify-content-between">
                    <a className="navbar-brand" href="#">Platonic Solids</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mint</a>
                            </li>
                        </ul>
                    </div>
                    {
                        !account &&
                        <button type="button" className="btn btn-primary" onClick={walletConnect}>Connect Wallet</button>
                    }
                    {
                        account &&
                        <div className="text-light">
                            <span className='mx-3'>{truncateAddress(account)}</span>
                            <button type="button" className="btn btn-warning" onClick={disconnectAccount}>Disconnect</button>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
