import React, { useContext, useState } from 'react'
import TokenContext from '../TokenContext';
import Web3 from 'web3';
import { Button } from '@mui/material';

function ColorInput({ s, update }) {

    const { token, preview } = useContext(TokenContext);

    const defaultValue = token.settings[s.key];
    const prevValue = preview.settings[s.key];

    const [data, setData] = useState(defaultValue !== prevValue ? prevValue : defaultValue);

    const colorHex = (num) => {
       return "#" + Web3.utils.padLeft((Web3.utils.toHex(num)).replace("0x", ""), 6);
    }

    const hexToNumColor = (hex) => {
        return Web3.utils.hexToNumber(hex.replace("#", "0x"));
    }

    const handleInput = (e) => {
        const val = hexToNumColor(e.target.value);
        setData(val);
        update(val);
    }

    return (
        <>
            <input type="color" name={s.key + '-inp'} id={s.key + '-inp'} className='colorbox' value={colorHex(data)} onChange={handleInput} />
            {/* <div>

                <Button variant='contained' size='small' sx={{ mt: '1rem' }} onClick={() => update(data)}> Preview Change</Button>

            </div> */}
        </>
    )
}

export default ColorInput
