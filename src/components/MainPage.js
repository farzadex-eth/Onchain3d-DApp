import React, { useContext, useEffect, useRef, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { Link, useParams } from 'react-router-dom';
import { Alert, Container } from '@mui/material';
import ContractContext from '../ContractContext';

function MainPage() {

    const { tid } = useParams();

    const { totalMinted } = useContext(ContractContext);

    const [total, setTotal] = useState("_");
    const [mode, setMode] = useState(0);
    const updated = useRef(false);

    const getNumMinted = async () => {
        totalMinted()
            .then((num) => {
                updated.current = true;
                setTotal(num);
            });
    }

    useEffect(() => {
        if(!updated.current) {
            getNumMinted();
        }
    })

    return (
        <div style={{minHeight: '90vh'}}>
            <Container maxWidth="lg">
                <Alert severity='info' sx={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: "18px" }}>
                    {
                        total < 2000 &&
                        <span>{total}/2000 Minted! You can <Link to="/mint">mint now</Link>!</span>
                    }
                    {
                        total >= 2000 &&
                        <span>Sold Out! 2000/2000</span>
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
        </div>
    )
}

export default MainPage
