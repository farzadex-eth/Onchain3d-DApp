import { Container, Typography, Grid, Alert, Button, Slider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import WalletContext from '../WalletContext';

function Mint() {

    const { totalMinted, mintTokens, MINT_PRICE } = useContext(ContractContext);
    const { account, chainId, changeNetwork } = useContext(WalletContext);

    const [total, setTotal] = useState("_");
    const [num, setNum] = useState(1);

    const getNumMinted = async () => {
        totalMinted()
            .then(num => setTotal(num))
    }

    
    const handleNumInput = (e) => {
        const val = parseInt(e.target.value);
        if (isNaN(val)) {
            setNum(1);
            return;
        }
        const max = Math.min(10, 2000 - total);
        setNum(Math.max(1, Math.min(max, val)));
    }
    
    useEffect(() => {
        getNumMinted();
    })

    return (
        <>
            <Container maxWidth="lg" sx={{ minHeight: '90vh' }}>
                <div className="appbox">
                    <Typography component="h1" variant="h4" color="black"
                        sx={{
                            my: "1rem",
                            fontFamily: "monospace"
                        }}
                    >
                        Mint Tokens
                        <hr />
                    </Typography>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        alignContent="stretch"
                        wrap="wrap"
                    >
                        <Grid item xs={12} sx={{ mb: '2rem' }}>
                            <Alert severity='info' sx={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: "18px" }}>
                                {
                                    total < 2000 &&
                                    <span>{total}/2000 Minted!</span>
                                }
                                {
                                    total >= 2000 &&
                                    <span>Sold Out! 2000/2000</span>
                                }
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input type="number" name="num" id="num" value={num} onChange={handleNumInput} />
                            <Slider
                                marks
                                min={1}
                                max={Math.min(10, 2000 - total) || 10}
                                step={1}
                                value={num}
                                onChange={handleNumInput}
                                sx={{ fontFamily: 'monospace', width: "80%" }}
                            />
                            <p>Price: {(num * MINT_PRICE).toFixed(3)} ETH</p>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{mb: '1rem'}}>
                            {
                                account &&
                                <>
                                    {
                                        (chainId === '8453' || chainId === '0x2105') &&
                                        <Button variant="contained" color="success" size="large" fullWidth onClick={() => mintTokens(num)}>Mint Tokens</Button>
                                    }
                                    {
                                        !(chainId === '8453' || chainId === '0x2105') &&
                                        <>
                                            <p>Change your network to Base</p>
                                            <Button variant="contained" color="success" size="large" onClick={() => changeNetwork('Base')}>Change Network to Base</Button>
                                        </>
                                    }
                                </>
                            }
                            {
                                !account &&
                                <p>Connect your wallet to mint</p>
                            }
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Mint
