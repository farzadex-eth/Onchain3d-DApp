import { Container, Typography, Grid, Box, LinearProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import WalletContext from '../WalletContext'
import ContractContext from '../ContractContext';
import TokenThumbnail from './TokenThumbnail';

function MyTokens() {

    const { account } = useContext(WalletContext);
    const { getTokensOfAddress } = useContext(ContractContext);

    const [loading, setLoading] = useState(false);
    const [toks, setToks] = useState();

    const fetchTokens = async () => {
        setLoading(true);
        try {
            const tokens = await getTokensOfAddress(account);
            setToks(tokens);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTokens();
    }, [account])

    return (
        <>
            <Container maxWidth="lg">
                <div className="appbox">
                    <Typography component="h1" variant="h4" color="black"
                        sx={{
                            my: "1rem",
                            fontFamily: "monospace"
                        }}
                    >
                        My Tokens
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
                        sx={{ my: '2rem', overflowY: 'scroll', maxHeight: '50vh' }}
                    >
                        {
                            !account &&
                            <Grid item xs={12}>
                                Connect your wallet to see your tokens!
                            </Grid>
                        }
                        {
                            account &&
                            <Box sx={{width: '100%'}}>
                                {
                                    loading &&
                                    <LinearProgress
                                        sx={{
                                            width: "80%",
                                            my: "3rem",
                                            mx: "auto"
                                        }}
                                    />
                                }
                                {
                                    !loading && Array.isArray(toks) &&
                                    <Grid
                                      container
                                      spacing={1}
                                      direction="row"
                                      justify="space-between"
                                      alignItems="flex-start"
                                      alignContent="stretch"
                                      wrap="wrap"
                                      sx={{width: '90%', mx: 'auto'}}
                                    >
                                        <Grid item xs={12}>{toks.length} Tokens</Grid>
                                      {
                                        toks.map((item) => (
                                            <Grid item xs={4} key={item} sx={{cursor: 'pointer'}}>
                                                <TokenThumbnail token={item} />
                                            </Grid>
                                        ))
                                      }
                                    </Grid>
                                }
                            </Box>
                        }
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default MyTokens
