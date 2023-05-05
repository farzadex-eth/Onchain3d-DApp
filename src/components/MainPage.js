import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { Link, useParams } from 'react-router-dom';
import Container from '@mui/material/Container'
import { Button, Typography } from '@mui/material';

function MainPage() {

    const { tid } = useParams();

    const [mode, setMode] = useState(0);

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
                        Coming to mainnet soon ...
                        <hr />
                    </Typography>
                    <Typography component="p" variant="h6" color="black"
                        sx={{
                            my: "1rem",
                            fontFamily: "monospace"
                        }}
                    >
                        You can test our collection and dapp with full functionalities on <a href="https://goerli.onchain3d.xyz" target='_blank'>Goerli</a> and <a href="https://sepolia.onchain3d.xyz" target='_blank'>Sepolia</a> testnets
                    </Typography>

                    <Typography component="p" variant="button" sx={{ mb: '1rem' }}>
                        <Link to="/about"><Button variant="contained">Read about this project</Button></Link>
                    </Typography>
                </div>
            </Container>
        </>
        // <>
        //     {
        //         mode === 0 &&
        //         <TokenView setMode={setMode} search={tid} />
        //     }
        //     {
        //         mode === 1 &&
        //         <TokenEdit setMode={setMode} />
        //     }
        // </>
    )
}

export default MainPage
