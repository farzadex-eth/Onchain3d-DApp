import React, { useContext, useState } from 'react'
import TokenContext from '../TokenContext';
import { Alert, Button } from '@mui/material';

function NumberInput({ s, update }) {

    const { token, preview } = useContext(TokenContext);

    const defaultValue = token.settings[s.key];
    const prevValue = preview.settings[s.key];

    const [data, setData] = useState(defaultValue !== prevValue ? prevValue : defaultValue);

    const handleInput = (e) => {
        e.preventDefault();
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setData(defaultValue);
            return;
        }
        setData(Math.max(s.min, Math.min(s.max, val)) * s.multiplier);
        update(Math.max(s.min, Math.min(s.max, val)) * s.multiplier);
    }

    const handleInputArray = (e, index) => {
        e.preventDefault();
        const val = parseFloat(e.target.value);
        let arr = [...data];
        if (isNaN(val)) {
            arr[index] = defaultValue;
            setData(arr);
            return;
        }
        arr[index] = Math.max(s.min, Math.min(s.max, val)) * s.multiplier;
        setData(arr);
        update(arr);
    }

    const pDistance = () => {
        const dist = Math.sqrt((data.map((i) => (i/s.multiplier)**2)).reduce((a, b) => (a+b)));
        return dist;
    }


    return (
        <>
            {
                s.num === 1 &&
                <>
                    <input type="number" name={s.slug + '-inp'} id={s.slug + '-inp'} value={data} onChange={handleInput} />
                    <span style={{ margin: '0 1rem' }}>{s.unit}</span>
                    {/* <div>
                        {
                            data !== defaultValue &&
                            <Button variant='contained' size='small' sx={{ mt: '1rem' }} onClick={() => update(data)}> Preview Change</Button>
                        }
                    </div> */}
                </>
            }
            {
                s.num > 1 &&
                <>
                    {
                        s.names.map((name, index) => (
                            <div key={s.key + '-input-' + index}>
                                <span style={{ margin: '0 1rem' }}>{name}</span>
                                <input type="number" name={s.slug + '-inp'} id={s.slug + '-inp'} value={data[index]/s.multiplier} onChange={(e) => handleInputArray(e, index)} />
                                <span style={{ margin: '0 1rem' }}>{s.unit}</span>
                            </div>
                        ))

                    }
                    <div>
                        {
                            pDistance() < 4 &&
                            <Alert severity='warning'>Observer too close - Change the coordinates - Your transaction will revert</Alert>
                        }
                    </div>
                    {/* <div>
                        {
                            pDistance() > 4 &&
                            <Button variant='contained' size='small' sx={{ mt: '1rem' }} onClick={() => update(data)}> Preview Change</Button>
                        }
                    </div> */}
                </>
            }
        </>
    )
}

export default NumberInput
