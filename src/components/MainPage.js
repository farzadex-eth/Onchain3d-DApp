import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { useParams } from 'react-router-dom';
import { Alert, Container } from '@mui/material';
import ContractContext from '../ContractContext';

function MainPage() {

    const { tid } = useParams();

    const { getTotalSupply } = useContext(ContractContext);

    const [total, setTotal] = useState("_");
    const [mode, setMode] = useState(0);

    const getNumMinted = async () => {
        const t = await getTotalSupply();
        setTotal(t);
    }

    getNumMinted();

    return (
        <>
            <Container maxWidth="lg">
                <Alert severity='info' sx={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: "18px" }}>
                    {
                        total < 10000 &&
                        <span>{total}/10000 Minted! You can <a href="https://testnet.zora.co/collect/0x4af21df2dc80f617cc1f496a77bd2310685f1710" target="_blank">mint now</a>!</span>
                    }
                    {
                        total >= 10000 &&
                        <span>Sold Out! 10000/10000</span>
                    }
                </Alert>
            </Container>
            {
                mode === 0 &&
                <TokenView setMode={setMode} search={tid} />
            }
            {
                mode === 1 &&
                <TokenEdit setMode={setMode} />
            }
        </>
    )
}

export default MainPage
