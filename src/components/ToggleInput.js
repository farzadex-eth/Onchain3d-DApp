import { Button, Switch } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TokenContext from '../TokenContext';

function ToggleInput({ s, update, resetAll }) {

    const { token, preview } = useContext(TokenContext);
    const defaultValue = token.settings[s.key];
    const prevValue = preview.settings[s.key];

    const [data, setData] = useState(defaultValue !== prevValue ? prevValue : defaultValue);

    const handleInputChange = (e) => {
        update(!data);
        setData((prev) => (!prev));
    }

    const resetInput = () => {
        setData(defaultValue);
        update(defaultValue);
    }

    useEffect(() => {
        if (resetAll) {
            setData(defaultValue);
        }
    }, [resetAll])

    return (
        <>
            <div>
                <span>{s.toggleNames[1]}</span>
                <Switch checked={data} onChange={handleInputChange} />
                <span>{s.toggleNames[0]}</span>
            </div>
            <div>
                <Button variant='outlined' size='small' sx={{ mt: '1rem' }} onClick={resetInput} color='warning'>Reset</Button>
            </div>

        </>
    )
}

export default ToggleInput
