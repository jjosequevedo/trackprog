'use client';

import * as React from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Tab, Tabs, TextField } from '@mui/material';
import DashboardTheme from '@/app/theme/DashboardTheme';
import { useTranslations } from 'next-intl';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import localeData from "dayjs/plugin/localeData";
import { SettingsProps, TabPanelProps } from '@/app/interfaces';

dayjs.extend(localeData);

const Settings: React.FC<SettingsProps> = () => {
    const t = useTranslations('settings');

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
            </div>
        );
    }

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Data: ', formData);
        // Handle form submission logic here
    };

    const days = dayjs.weekdays();

    return (
        <DashboardTheme>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={t('general')} {...a11yProps(0)} />
                        <Tab label="Other" {...a11yProps(1)} disabled />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                <FormLabel component="label">{t('selectDays')}</FormLabel>
                                    <FormGroup>
                                        {
                                            dayjs.weekdays().map((d, i) => <FormControlLabel key={i} control={<Checkbox />} label={t(d)} />)
                                        }
                                    </FormGroup>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Other things here!
                </TabPanel>
            </Box>
        </DashboardTheme>
    );
};

export default Settings;
