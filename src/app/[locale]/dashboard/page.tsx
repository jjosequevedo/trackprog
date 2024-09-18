'use client';

import React from 'react';
import Days from '@/app/components/Days';
import DashboardTheme from '@/app/theme/DashboardTheme';
import Wizard from '@/app/components/Wizard';
import { DashboardProps } from '@/app/interfaces';

const Dashboard: React.FC<DashboardProps> = () => {

  return (
    <DashboardTheme>
      <Wizard />
    </DashboardTheme>
  );
}

export default Dashboard;
