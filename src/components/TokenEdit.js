import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import { Box, Container, Typography, Button, Grid, LinearProgress, Tabs, Tab } from '@mui/material';
import TokenSVG from './TokenSVG';
import TokenContext from '../TokenContext';
import EditPanel from './EditPanel';
import WalletContext from '../WalletContext';

function TokenEdit({ setMode }) {

    const { token, preview, setPreview, settingProperties, shapes } = useContext(TokenContext);
    const { account, chainId, changeNetwork } = useContext(WalletContext);
    const { getTokenPreview, setTokenSettings } = useContext(ContractContext);

    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState(0);
    const [render, setRender] = useState(0);
    const [resetChanges, setResetChanges] = useState(false);

    // console.log(preview)

    const fetchTokenPrev = async () => {
        setLoading(true);
        try {
            const svg = await getTokenPreview(preview.tid, preview.settings);
            setPreview((prev) => ({ ...prev, svg: svg }));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const submitTokenSettings = async () => {
        try {
            await setTokenSettings(preview.tid, preview.settings);
        } catch (e) {
            console.error(e);
        }
    }

    const goToViewMode = () => {
        setPreview((prev) => ({ ...prev, settings: token.settings }));
        setMode(0);
    }

    const handleTabChange = (e, newValue) => {
        setTab(newValue);
    }

    const rerenderPreview = () => {
        setRender((prev) => (prev + 1));
    }

    const resetAll = () => {
        setResetChanges(true);
        setPreview((prev) => ({ ...prev, settings: token.settings }))
        setTimeout(() => { setResetChanges(false) }, 500);
        setRender((prev) => (prev + 1));
    }

    useEffect(() => {
        fetchTokenPrev();
    }, [render])

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
                        <Button variant="outlined" sx={{ mx: '2rem' }} onClick={goToViewMode}> &lt; Back to View</Button>
                        Edit Token #{token.tid}
                        <hr />
                    </Typography>
                    <Box >
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            alignContent="stretch"
                            wrap="wrap"
                            sx={{
                                my: '2rem'
                            }}
                        >
                            {
                                loading &&
                                <Grid item xs={12} sm={6}>
                                    <img src='loading2.jpg' className='loadinganim' alt="token-edit-loading" />
                                    <LinearProgress
                                        sx={{
                                            width: "80%",
                                            my: "3rem",
                                            mx: "auto"
                                        }}
                                    />
                                </Grid>
                            }
                            {
                                !loading && token.svg &&
                                <Grid item xs={12} sm={6}>
                                    <TokenSVG data={preview.svg} tid={token.tid} shape={shapes[token.tid % 5].name} />
                                </Grid>
                            }
                            <Grid item xs={12} sm={6}>
                                <Button variant='contained' size='small' sx={{ my: '1rem' }} onClick={rerenderPreview} >Preview All Changes</Button>
                                <Button variant='contained' size='small' sx={{ my: '1rem' }} onClick={resetAll} color="error" >Reset All Changes</Button>
                                <Box sx={{ bgcolor: 'background.paper' }}>
                                    <Tabs
                                        value={tab}
                                        onChange={handleTabChange}
                                        variant="scrollable"
                                        scrollButtons="auto"
                                    >
                                        {
                                            settingProperties.map((s, index) => (
                                                <Tab label={s.title} key={s.key} sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} />
                                            ))
                                        }
                                    </Tabs>
                                    {
                                        settingProperties.map((s, index) => (
                                            <EditPanel sp={s} value={tab} index={index} resetAll={resetChanges} key={s.key + '-editpanel'} />
                                        ))
                                    }


                                </Box>
                                <Grid item xs={12} sx={{ my: '1rem' }}>
                                    {
                                        account &&
                                        <>
                                            {
                                                (String(chainId) === '5' || String(chainId) === '0x5') &&
                                                <Button variant="contained" color="success" size="large" fullWidth onClick={submitTokenSettings}>Submit All</Button>
                                            }
                                            {
                                                !(String(chainId) === '5' || String(chainId) === '0x5') &&
                                                <>
                                                    <p>Change your network to Goerli Testnet</p>
                                                    <Button variant="contained" color="success" size="large" onClick={() => changeNetwork('Goerli Testnet')}>Change Network to Goerli</Button>
                                                </>
                                            }
                                        </>
                                    }
                                    {
                                        !account &&
                                        <p>Connect your wallet to submit changes</p>
                                    }
                                </Grid>
                            </Grid>
                            {/* <Grid item xs="12" sm={6}></Grid> */}
                        </Grid>
                    </Box>
                </div>
            </Container>
        </>
    )
}

export default TokenEdit
