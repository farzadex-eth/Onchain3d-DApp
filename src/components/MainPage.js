import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { TokenProvider } from '../TokenContext';

function MainPage() {

    const [mode, setMode] = useState(0);

    return (
        <>
            {
                mode === 0 &&
                <TokenView setMode={setMode} />
            }
            {
                mode === 1 &&
                <TokenEdit setMode={setMode} />
            }
        </>
    )
}

export default MainPage
