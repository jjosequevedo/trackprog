'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import GridEditable from './GridEditable';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

dayjs.extend(minMax);

const Days = () => {
  const t = useTranslations('dashboard');
  const [tabs, setTabs] = React.useState<string[]>([dayjs().format('YYYY-MM-DD')]); // Array of date strings
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const addTab = (daysToAdd: number) => {
    const newDate = dayjs(tabs[selectedTab]).add(daysToAdd, 'day').format('YYYY-MM-DD');
    if (!tabs.includes(newDate)) {
      setTabs((prev) => [...prev, newDate].sort((a, b) => dayjs(a).isBefore(dayjs(b)) ? -1 : 1));
    }
    setSelectedTab(tabs.indexOf(newDate) !== -1 ? tabs.indexOf(newDate) : (daysToAdd > 0 ? tabs.length : 0));
  };

  const moveBack = () => addTab(-1); // Move back 1 day
  const moveForward = () => addTab(1); // Move forward 1 day

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Button onClick={moveBack} variant="contained" sx={{ mr: 2 }}>
        {t('previousDay')}
      </Button>
      <Button onClick={moveForward} variant="contained">
        {t('nextDay')}
      </Button>

      <Tabs value={selectedTab} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        {tabs.map(date => (<Tab key={date} label={date} />))}
      </Tabs>

      {/* Display the content of the selected date */}
      <Box sx={{ mt: 2 }}>
        {tabs[selectedTab]}
        <GridEditable />
      </Box>
    </Box>
  );
}

export default Days;
