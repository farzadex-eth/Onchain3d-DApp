import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { Link, useParams } from 'react-router-dom';
import { Alert, Container } from '@mui/material';
import ContractContext from '../ContractContext';

function MainPage() {

    const { tid } = useParams();

    const { totalMinted } = useContext(ContractContext);

    const [mode, setMode] = useState(0);
    const [total, setTotal] = useState("_");

    const getNumMinted = async () => {
        totalMinted()
            .then(num => setTotal(num))
    }

    getNumMinted();

    return (
        <>
            <Container maxWidth="lg">
                <Alert severity='info' sx={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: "18px" }}>
                    {
                        total < 10000 &&
                        <span>{total}/10000 Minted! You can <Link to="/mint">mint now</Link>!</span>
                    }
                    {
                        total >= 10000 &&
                        <span>Sold Out! 10000/10000</span>
                    }
                </Alert>
            </Container>
            <>
                {
                    mode === 0 &&
                    <TokenView setMode={setMode} search={tid} />
                }
                {
                    mode === 1 &&
                    <TokenEdit setMode={setMode} />
                }
            </>
        </>
    )
}

export default MainPage
