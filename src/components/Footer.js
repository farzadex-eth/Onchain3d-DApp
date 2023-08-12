import { Avatar, Card, Grid } from '@mui/material'
import React from 'react'
import TwitterCard from './TwitterCard'
import ContractCard from './ContractCard'
import { contractAdr, proxyAdr } from '../Contracts'

function Footer() {
    return (
        <footer>
            <Grid container spacing={1} sx={{ my: '1rem', width: '90%', mx: 'auto' }}>
                <Grid item xs={12} sm={6} >
                    <TwitterCard
                        photo="https://pbs.twimg.com/profile_images/1562106283192369153/UWVqRrjQ_400x400.jpg"
                        name="sciNFTist.eth - Smart Contract"
                        handle="sciNFTist"
                        footer
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TwitterCard
                        photo="https://pbs.twimg.com/profile_images/1643890995900104707/SLE0SxR1_400x400.jpg"
                        name="farzadex.eth - DApp"
                        handle="farzadex"
                        footer
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="goerli" address={proxyAdr} title="Contract" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="goerli" address={contractAdr} title="Engine" />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
