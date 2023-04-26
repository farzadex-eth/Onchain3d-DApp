import React, { useContext, useEffect, useState } from 'react'
import TokenContext from '../TokenContext';
import Web3 from 'web3';
import { Button, Grid } from '@mui/material';

function ColorListInput({ s, update, resetAll }) {
    const { token, preview, shapes } = useContext(TokenContext);

    const defaultValue = token.settings[s.key];
    const prevValue = preview.settings[s.key];

    const [data, setData] = useState(defaultValue !== prevValue ? prevValue : defaultValue);

    const colorHex = (num) => {
        return "#" + Web3.utils.padLeft((Web3.utils.toHex(num)).replace("0x", ""), 6);
    }

    const hexToNumColor = (hex) => {
        return Web3.utils.hexToNumber(hex.replace("#", "0x"));
    }

    const handleInput = (e, index) => {
        const val = hexToNumColor(e.target.value);
        let arr = [...data];
        arr[index] = String(val);
        setData(arr);
        update(arr);
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
            <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="stretch"
                wrap="wrap"
                sx={{ width: '90%', mx: 'auto' }}
            >
                {
                    preview.settings.color_list.slice(0, shapes[preview.tid % 5].faces).map((item, index) => (
                        <div key={'color_list_' + index} style={{ display: 'inline', marginTop: '0.5rem' }}>
                            {index < 10 ? <span>&nbsp;{index}</span> : index}
                            <input type="color" name={s.key + '-inp-' + index} id={s.key + '-inp-' + index} className='colorbox' value={colorHex(data[index])} onChange={(e) => handleInput(e, index)} />
                        </div>
                    ))
                }
            </Grid>
            <div>
                <Button variant='outlined' size='small' sx={{ mt: '1rem' }} onClick={resetInput} color='warning'>Reset</Button>
            </div>
        </>
    )
}

export default ColorListInput
