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
                    <ContractCard network="goerli" address="0xa2804c5C55e9ab18458CB6A17D600E76a15C7f2A" title="Contract" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContractCard network="goerli" address="0x9e43180a5E4D82B0961Da1ec54366bf67214B87c" title="Renderer" />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
