import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { TokenProvider } from '../TokenContext';

function MainPage() {

    // const { token, setToken } = useContext(TokenContext);

    const [mode, setMode] = useState(0);
    // const [token, setToken] = useState({ tid: 0, svg: "", settings: [] });

    return (
        <>
            <TokenProvider>
                {
                    mode === 0 &&
                    <TokenView setMode={setMode} />
                }
                {
                    mode === 1 &&
                    <TokenEdit setMode={setMode} />
                }
            </TokenProvider>
        </>
    )
}

export default MainPage
