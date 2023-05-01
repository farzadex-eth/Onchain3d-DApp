import React, { useContext, useEffect, useState } from 'react'
import TokenContext from '../TokenContext';
import { Alert, Button, Slider } from '@mui/material';

function NumberInput({ s, update, resetAll }) {

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
        const dist = Math.sqrt((data.slice(0, 2).map((i) => (i / s.multiplier) ** 2)).reduce((a, b) => (a + b)));
        return dist;
    }

    const resetInput = () => {
        setData(defaultValue);
        update(defaultValue);
    }

    const marks1 = [
        {
            value: s.min,
            label: "" + s.min
        },
        {
            value: (s.min + s.max) / 2,
            label: "" + (s.min + s.max) / 2
        },
        {
            value: s.max,
            label: "" + s.max
        }
    ];

    const marks2 = [
        {
            value: -100,
            label: "-100",
        },
        {
            value: -50,
            label: "-50",
        },
        {
            value: 0,
            label: "0",
        },
        {
            value: 50,
            label: "50",
        },
        {
            value: 100,
            label: "100",
        },
    ]

    useEffect(() => {
        if (resetAll) {
            setData(defaultValue);
        }
    }, [resetAll])


    return (
        <>
            {
                s.num === 1 &&
                <>
                    <input type="number" name={s.key + '-inp'} id={s.key + '-inp'} value={data} onChange={handleInput} />
                    <span style={{ margin: '0 1rem' }}>{s.unit}</span>
                    <Slider
                        marks={marks1}
                        min={s.min}
                        max={s.max}
                        step={1}
                        value={data}
                        onChange={handleInput}
                        sx={{ fontFamily: 'monospace', width: "80%" }}
                    />
                </>
            }
            {
                s.num > 1 &&
                <>
                    {
                        s.names.map((name, index) => (
                            <div key={s.key + '-input-' + index}>
                                <span style={{ margin: '0 1rem' }}>{name}</span>
                                <input type="number" name={s.key + '-inp'} id={s.key + '-inp'} value={data[index] / s.multiplier} onChange={(e) => handleInputArray(e, index)} />
                                <span style={{ margin: '0 1rem' }}>{s.unit}</span>
                                <Slider
                                    marks={marks2}
                                    min={s.min}
                                    max={s.max}
                                    step={0.1}
                                    value={data[index] / s.multiplier}
                                    onChange={(e) => handleInputArray(e, index)}
                                    sx={{ fontFamily: 'monospace', width: "80%" }}
                                />
                            </div>
                        ))

                    }
                    <div>
                        {
                            pDistance() < 4 &&
                            <Alert severity='warning' sx={{ fontFamily: 'monospace' }}>Observer too close - Change the coordinates - Your transaction will revert</Alert>
                        }
                    </div>
                </>
            }
            <div>
                <Button variant='outlined' size='small' sx={{ mt: '1rem' }} onClick={resetInput} color='warning'>Reset</Button>
            </div>
        </>
    )
}

export default NumberInput
