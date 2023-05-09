import { Box, Tab, Tabs, Grid } from '@mui/material'
import React, { useState } from 'react'
import EditPanel from './EditPanel';

function EditGroupPanel({ sp, index, value, resetAll }) {

    const [subTab, setSubTab] = useState(0);

    const handleSubTabChange = (e, newValue) => {
        setSubTab(newValue);
    }
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{ py: '2rem' }}
        >
            <Grid
                container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="stretch"
                wrap="wrap"
            >
                <Grid item xs={3}>
                    <Tabs
                        value={subTab}
                        onChange={handleSubTabChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        orientation="vertical"
                    >
                        {
                            sp.group.map((st) => (
                                <Tab label={st.title} key={st.key} sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} />
                            ))
                        }
                    </Tabs>
                </Grid>
                <Grid item xs={9}>
                    {
                        sp.group.map((s, index) => (
                            <EditPanel sp={s} value={subTab} index={index} resetAll={resetAll} key={s.key + '-editpanel'} />
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditGroupPanel
