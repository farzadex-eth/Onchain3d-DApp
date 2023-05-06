import { Avatar, Card, Grid } from '@mui/material'
import React from 'react'
import TwitterCard from './TwitterCard'
import ContractCard from './ContractCard'

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
                    <ContractCard network="goerli" address="0x4af21df2dc80f617cc1f496a77bd2310685f1710" title="Contract" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="goerli" address="0x8e9f494a0e94909f94697A42dd0b4899505FeCBF" title="Engine" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="sepolia" address="0x3217bD371E66f195E9Af082bd42486B3ED250A27" title="Contract" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="sepolia" address="0x6Fd9f95566ebfbB254F64AE0F8D3b4eAd555cCed" title="Engine" />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
