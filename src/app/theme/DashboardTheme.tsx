'use client';

import { AppBar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, Drawer, Link, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { AccountCircle, Dashboard, Home, ReportProblem, Settings } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { useLocale, useTranslations } from "next-intl";
import { DashboardThemeProps } from "../interfaces";

const DashboardTheme: React.FC<DashboardThemeProps> = ({ children }) => {
  const t = useTranslations('theme');
  const locale = useLocale();

  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickMenuItem = () => {
    debugger
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6" sx={{ padding: '16px' }}>Dashboard Menu</Typography>
        <Box sx={{ padding: '8px' }}>
          {/* Menu items can be placed here */}
          <Link href={`/${locale}/dashboard`}>
            <Typography>{t('menu.home')}</Typography>
          </Link>
          <Link href={`/${locale}/settings`}>
            <Typography>{t('menu.settings')}</Typography>
          </Link>
          <Link href={`/${locale}/reports`}>
            <Typography>{t('menu.reports')}</Typography>
          </Link>
          <Link href={`/${locale}/profile`}>
            <Typography>{t('menu.profile')}</Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for larger screens */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="dashboard folders"
      >
        {/* Temporary drawer for mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent drawer for larger screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {children}

      </Box>

      {/* Bottom navigation for mobile */}
      {isMobile && (
        <BottomNavigation color='blue'
          sx={{ position: 'fixed', bottom: 0, width: '100%', display: { sm: 'none' } }}
          value={bottomNavValue}
          onChange={(event, newValue) => {
            setBottomNavValue(newValue);
          }}
        >
          <BottomNavigationAction label={t('menu.home')} icon={<Home />} href={`/${locale}/dashboard`} onClick={onClickMenuItem} />
          <BottomNavigationAction label={t('menu.settings')} href={`/${locale}/settings`} icon={<Settings />} />
          <BottomNavigationAction label={t('menu.profile')} href={`/${locale}/profile`}  icon={<AccountCircle />} />
          <BottomNavigationAction label={t('menu.reports')} href={`/${locale}/reports`}  icon={<ReportProblem />} />
        </BottomNavigation>
      )}
    </Box>
  );
}

export default DashboardTheme;
