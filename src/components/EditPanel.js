import React, { useContext } from 'react'
import NumberInput from './NumberInput'
import { Box } from '@mui/material'
import TokenContext from '../TokenContext'

function EditPanel({ sp, index, value }) {

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
                    <NumberInput s={sp} update={updatePreviewSetting} key={sp.key + '-input'} />
                }

            </Box>
        </>
    )
}

export default EditPanel
