import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

function ObserverInput({ name, update, defaultValue, unit, preview }) {

    const [data, setData] = useState(defaultValue);

    const handleInput = (e) => {
        e.preventDefault();
        const val = parseFloat(e.target.value);
        if( isNaN(val) ) {
            setData(defaultValue);
            return;
        }
        setData(val);
    }

    useEffect(() => {
        setData(preview.settings[name])
    }, [preview.settings])

    return (
        <>
            <input type="number" name={name} id={name} value={data} onChange={handleInput} />
            {
                unit || ""
            }
            {
                data !== defaultValue &&
                <Button variant='contained' size='small' onClick={() => update(name, data)}> Preview Change</Button>
            }
        </>
    )
}

export default ObserverInput
