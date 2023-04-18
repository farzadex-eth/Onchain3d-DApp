import React, { useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';

function MainPage() {

    const [mode, setMode] = useState(0);
    const [token, setToken] = useState({ tid: 0, svg: "", settings: [] });

    return (
        <>
            {
                mode === 0 &&
                <TokenView token={token} setToken={setToken} setMode={setMode} />
            }
            {
                mode === 1 &&
                <TokenEdit token={token} setToken={setToken} setMode={setMode} />
            }
        </>
    )
}

export default MainPage
