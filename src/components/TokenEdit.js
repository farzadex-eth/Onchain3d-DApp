import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import { Box, Container, Typography, Button, Grid, LinearProgress } from '@mui/material';
import TokenSVG from './TokenSVG';
import ColorBox from './ColorBox';

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

function TokenEdit({ token, setToken, setMode }) {

    const { getTokenPreview, getSetting } = useContext(ContractContext);
    const [tid, setTid] = useState(0);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState({ tid: 0, svg: "", settings: [] });

    const fetchTokenPrev = async () => {
        // e.preventDefault();
        console.log('h')
        setLoading(true);
        try {
            const svg = await getTokenPreview(token.tid, token.settings);
            // const svg = await renderTokenById(tid);
            // const settings = await getSetting(tid);
            // setToken((prev) => ({ ...prev, svg: svg, tid: tid, settings: settings }));
            console.log(svg);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const numberToColor = (num) => {
        num >>>= 0;
        var b = num & 0xFF,
            g = (num & 0xFF00) >>> 8,
            r = (num & 0xFF0000) >>> 16,
            a = ((num & 0xFF000000) >>> 24) / 255;
        return "rgb(" + [r, g, b].join(",") + ")";
    }

    const goToViewMode = () => {
        setMode(0);
    }

    useEffect(() => {
        fetchTokenPrev();
    }, [preview])

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
                        <Button variant="outlined" sx={{mx: '2rem'}} onClick={goToViewMode}> &lt; Back to View</Button>
                        Edit Token #{token.tid}
                        <hr />
                    </Typography>

                    <Box className="">
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
                            !loading && token.svg &&
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
                                <Grid item xs="12" sm="6">
                                    <TokenSVG data={preview.svg} tid={token.tid} shape={shapes[token.tid % 5].name} />
                                </Grid>
                                <Grid item xs="12" sm="6">
                                    <Grid
                                        container
                                        direction="column"
                                        justify="flex-end"
                                        alignItems="flex-start"
                                        alignContent="stretch"
                                        wrap="wrap"
                                        sx={{
                                            width: "90%"
                                        }}
                                    >
                                        <h5>
                                            Token Settings
                                            <hr />
                                        </h5>
                                        <p className="settingrow rowanim">Observer Position: X: {token.settings.observer[0] / (2 ** 64)}, Y: {token.settings.observer[1] / (2 ** 64)}, Z: {token.settings.observer[2] / (2 ** 64)}</p>
                                        <p className="settingrow rowanim">Opacity: {token.settings.opacity}%</p>
                                        <p className="settingrow rowanim">Rotating Mode: {token.settings.rotating_mode ? "ON" : "OFF"}</p>
                                        <p className="settingrow rowanim">Angular Speed: {token.settings.angular_speed_deg} (deg / 15 minutes)</p>
                                        <p className="settingrow rowanim">View Mode: {!token.settings.dist_v_normalize ? "Normalized" : "From Distance"}, {!token.settings.face_or_wire ? "Wireframe" : "Faces"}</p>
                                        <p className="settingrow">
                                            <span className="rowanim">Wireframe Color: {numberToColor(token.settings.wire_color)}</span>
                                            <ColorBox color={numberToColor(token.settings.wire_color)} />
                                        </p>
                                        <p className="settingrow">
                                            <Grid
                                                container
                                                spacing={1}
                                                direction="row"
                                                justify="flex-start"
                                                alignItems="flex-start"
                                                alignContent="stretch"
                                                wrap="wrap"
                                            >
                                                <Grid item xs="12" className="rowanim">Face Colors: </Grid>
                                                {
                                                    token.settings.color_list.length === 0 &&
                                                    defaultColors.slice(0, shapes[token.tid % 5].faces).map((num, index) => (
                                                        <Grid item xs="3">
                                                            {index < 10 ? <span>&nbsp;{index}</span> : index}
                                                            <ColorBox key={index} color={numberToColor(num)} />
                                                        </Grid>
                                                    ))
                                                }
                                                {
                                                    token.settings.color_list.length > 0 &&
                                                    token.settings.color_list.map((num, index) => (
                                                        <Grid item xs="3">
                                                            {index < 10 ? <span>&nbsp;{index}</span> : index}
                                                            <ColorBox key={index} color={numberToColor(num)} />
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                    </Box>
                </div>
            </Container>
        </>
    )
}

export default TokenEdit
