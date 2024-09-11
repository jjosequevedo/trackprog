'use client';

import React from 'react';
import Days from '@/app/components/Days';
import DashboardTheme from '@/app/theme/DashboardTheme';

const Dashboard: React.FC<DashboardProps> = () => {

  return (
    <DashboardTheme>
      <Days />
    </DashboardTheme>
  );
}

export default Dashboard;
