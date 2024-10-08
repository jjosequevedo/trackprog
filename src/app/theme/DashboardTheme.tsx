'use client';

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Drawer,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  AccountCircle,
  Home,
  ReportProblem,
  Settings,
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowForwardIos,
  ArrowBackIos,
} from '@mui/icons-material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocale, useTranslations } from 'next-intl';
import { DashboardThemeProps } from '../interfaces';

const DashboardTheme: React.FC<DashboardThemeProps> = ({ children }) => {
  const t = useTranslations('theme');
  const locale = useLocale();

  const drawerWidth = 260;
  const collapsedDrawerWidth = 72; // Width when collapsed

  const [mobileOpen, setMobileOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // Track if drawer is collapsed

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle between full and collapsed sidebar
  };

  const drawer = (
    <div>
      <Box sx={{ padding: '16px', color: theme.palette.text.primary }}>
        <Box sx={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Using Tooltip for icons */}
          <Tooltip title={t('menu.home')} placement="right" arrow>
            <Link href={`/${locale}/dashboard`} underline="none" sx={styles.menuLink}>
              <Home />
              {!isCollapsed && <Typography sx={styles.linkText}>{t('menu.home')}</Typography>}
            </Link>
          </Tooltip>
          <Tooltip title={t('menu.settings')} placement="right" arrow>
            <Link href={`/${locale}/settings`} underline="none" sx={styles.menuLink}>
              <Settings />
              {!isCollapsed && <Typography sx={styles.linkText}>{t('menu.settings')}</Typography>}
            </Link>
          </Tooltip>
          <Tooltip title={t('menu.reports')} placement="right" arrow>
            <Link href={`/${locale}/reports`} underline="none" sx={styles.menuLink}>
              <ReportProblem />
              {!isCollapsed && <Typography sx={styles.linkText}>{t('menu.reports')}</Typography>}
            </Link>
          </Tooltip>
          <Tooltip title={t('menu.profile')} placement="right" arrow>
            <Link href={`/${locale}/profile`} underline="none" sx={styles.menuLink}>
              <AccountCircle />
              {!isCollapsed && <Typography sx={styles.linkText}>{t('menu.profile')}</Typography>}
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar with search icon and user avatar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${isCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
          ml: { sm: `${isCollapsed ? collapsedDrawerWidth : drawerWidth}px` },
          background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
          boxShadow: theme.shadows[8],
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Search Icon */}
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <SearchIcon />
          </IconButton>

          {/* User Avatar */}
          <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
            <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          </IconButton>

          {/* Avatar Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: '45px' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography textAlign="center">{t('menu.profile')}</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography textAlign="center">{t('menu.settings')}</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography textAlign="center">{t('menu.logout')}</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer for menu */}
      <Box
        component="nav"
        sx={{ width: { sm: isCollapsed ? collapsedDrawerWidth : drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="dashboard menu"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
              background: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
              transition: 'width 0.3s',
            },
          }}
          open
        >
<IconButton
  onClick={toggleCollapse}
  sx={{
    position: 'absolute',
    // bottom: 20, // Adjust as necessary
    // left: isCollapsed ? '50%' : `calc(${drawerWidth}px - 50px)`, // Adjust positioning when collapsed
    transform: 'translateX(-50%)', // Center the button
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[4],
  }}
>
  {isCollapsed ? <ArrowForwardIos /> : <ArrowBackIos />}
</IconButton>

          {drawer}
        </Drawer>
      </Box>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${isCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <Toolbar />
        {children}
      </Box>

      {/* Bottom Navigation for mobile view */}
      {isMobile && (
        <BottomNavigation
          sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            background: theme.palette.primary.main,
            boxShadow: theme.shadows[10],
          }}
          value={bottomNavValue}
          onChange={(event, newValue) => setBottomNavValue(newValue)}
        >
          <BottomNavigationAction label={t('menu.home')} icon={<Home />} href={`/${locale}/dashboard`} />
          <BottomNavigationAction label={t('menu.settings')} icon={<Settings />} href={`/${locale}/settings`} />
          <BottomNavigationAction label={t('menu.profile')} icon={<AccountCircle />} href={`/${locale}/profile`} />
          <BottomNavigationAction label={t('menu.reports')} icon={<ReportProblem />} href={`/${locale}/reports`} />
        </BottomNavigation>
      )}
    </Box>
  );
};

// Custom styling for links
const styles = {
  menuLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'inherit',
    transition: 'background-color 0.3s',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'rgba(63, 81, 181, 0.08)',
      cursor: 'pointer',
    },
  },
  linkText: {
    marginLeft: '8px',
  },
};

export default DashboardTheme;
