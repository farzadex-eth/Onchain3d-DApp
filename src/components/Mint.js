import { Container, Typography, Grid, Alert, Button, Slider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import WalletContext from '../WalletContext';

function Mint() {

    const { totalMinted, mintTokens } = useContext(ContractContext);
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
        const max = Math.min(10, 10000 - total);
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
                                    total < 10000 &&
                                    <span>{total}/10000 Minted!</span>
                                }
                                {
                                    total >= 10000 &&
                                    <span>Sold Out! 10000/10000</span>
                                }
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input type="number" name="num" id="num" value={num} onChange={handleNumInput} />
                            <Slider
                                marks
                                min={1}
                                max={Math.min(10, 10000 - total) || 10}
                                step={1}
                                value={num}
                                onChange={handleNumInput}
                                sx={{ fontFamily: 'monospace', width: "80%" }}
                            />
                            <p>Price: {num * 0.01} ETH</p>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{mb: '1rem'}}>
                            {
                                account &&
                                <>
                                    {
                                        (String(chainId) === '11155111' || String(chainId) === '0xaa36a7') &&
                                        <Button variant="contained" color="success" size="large" fullWidth onClick={() => mintTokens(num)}>Mint Tokens</Button>
                                    }
                                    {
                                        !(String(chainId) === '11155111' || String(chainId) === '0xaa36a7') &&
                                        <>
                                            <p>Change your network to Sepolia Testnet</p>
                                            <Button variant="contained" color="success" size="large" onClick={() => changeNetwork('Sepolia Testnet')}>Change Network to Sepolia</Button>
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
