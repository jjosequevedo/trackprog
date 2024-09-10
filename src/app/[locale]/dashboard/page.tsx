'use client';

import { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Menu as MenuIcon, Home, Settings, Dashboard as DashBoardIcon, AccountCircle } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Days from '@/app/components/Days';

const drawerWidth = 240;

export default function Dashboard() {


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
          <Typography>Home</Typography>
          <Typography>Settings</Typography>
          <Typography>Profile</Typography>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
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

        <Days />

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
          <BottomNavigationAction label="Home" icon={<Home />} href='/dashboard' onClick={onClickMenuItem}/>
          <BottomNavigationAction label="Dashboard" icon={<DashBoardIcon />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      )}
    </Box>
  );
}
