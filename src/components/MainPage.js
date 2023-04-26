import React, { useContext, useState } from 'react'
import TokenView from './TokenView';
import TokenEdit from './TokenEdit';
import { useParams } from 'react-router-dom';

function MainPage() {

    const {tid} = useParams();

    const [mode, setMode] = useState(0);

    return (
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
    )
}

export default MainPage
