import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import { Box, Container, Typography, Button, Grid, LinearProgress, Tabs, Tab } from '@mui/material';
import TokenSVG from './TokenSVG';
import TokenContext from '../TokenContext';
import EditPanel from './EditPanel';
import WalletContext from '../WalletContext';

function TokenEdit({ setMode }) {

    const { token, preview, setPreview, settingProperties, shapes } = useContext(TokenContext);
    const { account } = useContext(WalletContext);
    const { getTokenPreview, setTokenSettings } = useContext(ContractContext);

    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState(0);

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
            const r = await setTokenSettings(preview.tid, preview.settings);
        } catch (e) {
            console.error(e);
        }
    }

    const goToViewMode = () => {
        setPreview((prev) => ({ ...prev, settings: token.settings }));
        setMode(0);
    }

    const resetAll = () => {
        setPreview((prev) => ({ ...prev, settings: token.settings }));
    }

    const handleTabChange = (e, newValue) => {
        setTab(newValue);
    }

    useEffect(() => {
        fetchTokenPrev();
    }, [preview.settings])

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
                                <Grid item xs="12" sm="6">
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
                                <Grid item xs="12" sm="6">
                                    <TokenSVG data={preview.svg} tid={token.tid} shape={shapes[token.tid % 5].name} />
                                </Grid>
                            }
                            <Grid item xs="12" sm="6">
                                <Box sx={{ bgcolor: 'background.paper' }}>
                                    <Tabs
                                        value={tab}
                                        onChange={handleTabChange}
                                        variant="scrollable"
                                        scrollButtons="auto"
                                    >
                                        {
                                            settingProperties.map((s, index) => (
                                                <Tab label={s.title} key={s.key} />
                                            ))
                                        }
                                    </Tabs>
                                    {
                                        settingProperties.map((s, index) => (
                                            <EditPanel sp={s} value={tab} index={index} key={s.key + '-editpanel'} />
                                        ))
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs="12" sm={6}></Grid>
                            <Grid item xs="12" sm={6}>
                                {
                                    account &&
                                    <Button variant="contained" color="success" size="large" fullWidth onClick={submitTokenSettings}>Submit All</Button>
                                }
                                {
                                    !account &&
                                    <p>Connect Your Wallet</p>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </>
    )
}

export default TokenEdit
