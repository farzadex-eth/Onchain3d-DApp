import React, { useContext, useEffect, useState } from 'react';
import ContractContext from '../ContractContext';
import { Box, Container, TextField, Typography, Button, Grid, LinearProgress } from '@mui/material';
import TokenSVG from './TokenSVG';
import ColorBox from './ColorBox';
import TokenContext from '../TokenContext';

function TokenView({ setMode, search }) {

    const { preview, token, setToken, setPreview, shapes } = useContext(TokenContext);
    const { renderTokenById, getSetting } = useContext(ContractContext);

    const [tid, setTid] = useState(token.tid);
    const [loading, setLoading] = useState(false);


    const handleInput = (e) => {
        const val = parseInt(e.target.value);
        if (isNaN(val)) {
            setTid(0);
            return;
        }
        setTid(Math.max(0, Math.min(val, 499)));
    }

    const fetchToken = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const svg = await renderTokenById(tid);
            const settings = await getSetting(tid);
            setToken((prev) => ({ ...prev, svg: svg, tid: tid, settings: settings[1] }));
            setPreview((prev) => ({ ...prev, svg: svg, tid: tid, settings: settings[1] }));
            console.log(preview);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const fetchTokenExt = async (tid) => {
        setLoading(true);
        try {
            const svg = await renderTokenById(tid);
            const settings = await getSetting(tid);
            setToken((prev) => ({ ...prev, svg: svg, tid: tid, settings: settings[1] }));
            setPreview((prev) => ({ ...prev, svg: svg, tid: tid, settings: settings[1] }));
            console.log(preview);
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
            r = (num & 0xFF0000) >>> 16;
        return "rgb(" + [r, g, b].join(",") + ")";
    }

    const goToEditMode = () => {
        setMode(1);
    }

    const hasParam = async () => {
        setTid(() => search);
        await fetchTokenExt(search);
    }

    useEffect(() => {
        if(search && !isNaN(search)) {
            hasParam();
        }
    }, [search])

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
                        View Token
                        <hr />
                    </Typography>
                    <form className='boxrow' onSubmit={fetchToken}>
                        <div className='boxel'>
                            <TextField id="outlined-basic" label="Token #" variant="outlined"
                                inputProps={{ style: { fontFamily: 'monospace' } }}
                                InputLabelProps={{ style: { fontFamily: 'monospace' } }}
                                value={tid}
                                onChange={handleInput}
                                onSubmit={fetchToken}
                            />
                        </div>
                        <div className='boxel'>
                            <Button variant="contained"
                                sx={{
                                    fontFamily: 'monospace',
                                }}
                                onClick={fetchToken}
                            >
                                Fetch Token
                            </Button>
                        </div>
                    </form>
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
                                    <TokenSVG data={token.svg} tid={token.tid} shape={shapes[token.tid % 5].name} />
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
                                            width: "90%",
                                            mx: 'auto'
                                        }}
                                    >
                                        <h5>
                                            Token Settings
                                            <Button variant="outlined" sx={{mx: '2rem'}} onClick={goToEditMode}>Change Settings</Button>
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
                                            <span className="rowanim">Background Color: {numberToColor(token.settings.back_color)}</span>
                                            <ColorBox color={numberToColor(token.settings.back_color)} />
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
                                                    // token.settings.color_list.length > 0 &&
                                                    token.settings.color_list.slice(0, shapes[token.tid % 5].faces).map((num, index) => (
                                                        <Grid item xs="3" key={index}>
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

export default TokenView
