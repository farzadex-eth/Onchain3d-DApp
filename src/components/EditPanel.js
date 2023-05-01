import React, { useContext } from 'react'
import NumberInput from './NumberInput'
import { Box } from '@mui/material'
import TokenContext from '../TokenContext'
import ToggleInput from './ToggleInput';
import ColorInput from './ColorInput';
import ColorListInput from './ColorListInput';

function EditPanel({ sp, index, value, resetAll }) {

    const { preview, setPreview } = useContext(TokenContext);

    const updatePreviewSetting = (newVal, index = -1) => {
        let tmpSettings = structuredClone(preview.settings);
        if (index < 0) {
            tmpSettings[sp.key] = newVal;
        } else {
            let arr = [...tmpSettings[sp.key]];
            arr[index] = newVal;
            tmpSettings[sp.key] = [...arr];
        }
        setPreview((prev) => (
            { ...prev, settings: tmpSettings }
        ));
    }

    return (
        <>
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                sx={{ py: '2rem' }}
            >
                <p>{sp.title}</p>
                {
                    sp.type === "number" &&
                    <NumberInput s={sp} update={updatePreviewSetting} resetAll={resetAll} key={sp.key + '-input'} />
                }
                {
                    sp.type === "toggle" &&
                    <ToggleInput s={sp} update={updatePreviewSetting} resetAll={resetAll} key={sp.key + '-input'} />
                }
                {
                    sp.type === "color" &&
                    <ColorInput s={sp} update={updatePreviewSetting} resetAll={resetAll} key={sp.key + '-input'} />
                }
                {
                    sp.type === "colorlist" &&
                    <ColorListInput s={sp} update={updatePreviewSetting} resetAll={resetAll} key={sp.key + '-input'} />
                }


            </Box>
        </>
    )
}

export default EditPanel
