'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import GridEditable from './GridEditable';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

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
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

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
      setTabs((prev) => [...prev, newDate]);
    }
    setSelectedTab(tabs.indexOf(newDate) !== -1 ? tabs.indexOf(newDate) : tabs.length);
  };

  const moveBack = () => addTab(-1); // Move back 1 day
  const moveForward = () => addTab(1); // Move forward 1 day

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Button onClick={moveBack} variant="contained" sx={{ mr: 2 }}>
        Previous Day
      </Button>
      <Button onClick={moveForward} variant="contained">
        Next Day
      </Button>

      <Tabs value={selectedTab} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        {tabs.map((date, index) => (
          <Tab key={date} label={date} />
        ))}
      </Tabs>

      {/* Display the content of the selected date */}
      <Box sx={{ mt: 2 }}>
        <GridEditable />
      </Box>
    </Box>
  );
}

export default Days;
