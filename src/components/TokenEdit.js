import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import { Box, Container, Typography, Button, Grid, LinearProgress, Tabs, Tab } from '@mui/material';
import TokenSVG from './TokenSVG';
import TokenContext from '../TokenContext';
import EditPanel from './EditPanel';

const defaultColors = [
    16761600,
    15158332,
    3447003,
    3066993,
    10181046,
    15844367,
    2600544,
    2719929,
    9323693,
    15965202,
    12597547,
    1752220,
    3426654,
    8359053,
    1482885,
    13849600,
    12436423,
    2899536,
    15787660,
    16101441
];

const shapes = [
    { name: "Tetrahedron", faces: 4 },
    { name: "Cube", faces: 6 },
    { name: "Octahedron", faces: 8 },
    { name: "Dodecahedron", faces: 12 },
    { name: "Icosahedron", faces: 20 },
]

function TokenEdit({ setMode }) {

    const { token, preview, setPreview, settingProperties } = useContext(TokenContext);
    const { getTokenPreview } = useContext(ContractContext);

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

    const goToViewMode = () => {
        setPreview((prev) => ({...prev, settings: token.settings}));
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
                    <Box className="">
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
                                                <EditPanel sp={s} value={tab} index={index} key={s.key+'-editpanel'}/>
                                            ))
                                        }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </>
    )
}

export default TokenEdit
