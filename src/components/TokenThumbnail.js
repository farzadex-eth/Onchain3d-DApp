import React, { useContext, useEffect, useState } from 'react'
import ContractContext from '../ContractContext'
import TokenSVG from './TokenSVG';
import TokenContext from '../TokenContext';
import { Skeleton } from '@mui/material';

function TokenThumbnail({ token }) {

    const { renderTokenById } = useContext(ContractContext);
    const { shapes } = useContext(TokenContext);

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const fetchToken = async () => {
        setLoading(true);
        try {
            const svg = await renderTokenById(token.tokenId);
            setImage(svg);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(!image) {
            fetchToken();
        }
    })

    return (
        <>
            {
                loading &&
                <div>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                    <p>Token #{token.tokenId} - {shapes[token.tokenId%5].name}</p>
                </div>
            }
            {
                !loading && image &&
                <TokenSVG data={image} tid={token.tokenId} shape={shapes[token.tokenId%5].name} thumbnail />
            }
        </>
    )
}

export default TokenThumbnail
