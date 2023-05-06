import { Avatar, Card } from '@mui/material'
import React from 'react'

function ContractCard({ network, address, title }) {

    const contractEtherscan = () => {
        return ( network.toLowerCase() === "mainnet"  ? `https://etherscan.io/address/${address}` : `https://${network.toLowerCase()}.etherscan.io/address/${address}`)
    } 

    return (
        <>
            <Card sx={{ background: 'transparent', textAlign: 'left', alignItems: 'center', display: 'flex' }}>
                <Avatar sx={{ display: 'inline-block', m: '0.5rem 1rem' }}>
                    <img src="/etherscan-logo-circle.png" alt="etherscan-logo" width="100%" />
                </Avatar>
                <span>{network.toUpperCase()} - {title} : <a href={contractEtherscan()} target='_blank' rel="noreferrer">{address}</a></span>
            </Card>
        </>
    )
}

export default ContractCard
