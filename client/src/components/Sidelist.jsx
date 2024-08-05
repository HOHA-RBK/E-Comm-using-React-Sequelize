import React, { useState, useEffect } from 'react';
import {
  ChevronLeft as ChevronLeftIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Person as PersonIcon,
  List as ListIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Addproduct from './Addproduct.jsx';
import Productlist from './Productlist.jsx';
import Profilepage from './Profilepage.jsx';
import Home from '../compoent/Home.jsx';

const drawerWidth = 240;
const closedDrawerWidth = 70;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#000000',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: closedDrawerWidth,
  backgroundColor: '#000000',
  [theme.breakpoints.up('sm')]: {
    width: closedDrawerWidth,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Sidelist = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const list = [
    {
      title: 'Add a product',
      icon: <AddCircleOutlineIcon sx={{ fontSize: 50, color: 'white' }} />,
      link: 'Addproduct',
      component: <Addproduct />,
    },
    {
      title: 'Product list',
      icon: <ListIcon sx={{ fontSize: 50, color: 'white' }} />,
      link: 'Productlist',
      component: <Productlist />,
    },
    // {
    //   title: 'Profile page',
    //   icon: <PersonIcon sx={{ fontSize: 50, color: 'white' }} />,
    //   link: 'Profilepage',
    //   component: <Profilepage />,
    // },
  ];

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     localStorage.removeItem('jwtToken');
  //   }
  // }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      {location.pathname !== '/Home' && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={() => setOpen(!open)} sx={{ fontSize: 50, color: 'white' }}>
              <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
          </DrawerHeader>
          <List>
            {list.map((item) => (
              <ListItem key={item.title} disablePadding sx={{ display: 'block', mb: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    '&:hover': {
                      bgcolor: '#555', // Background color on hover
                    },
                  }}
                  onClick={() => navigate(item.link)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      fontSize: open ? '1.25rem' : '1rem', // Adjust the font size here
                      color: 'white',
                      fontWeight: 'bold !important', // Force bold text
                      ml: open ? 2 : 0, // Add margin to the left when open
                      '& .MuiListItemText-primary': {
                        fontWeight: 'bold !important', // Ensure the text is bold
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ display: 'block', mb: 4 }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    bgcolor: '#555', 
                  },
                }}
                onClick={() => {
                  
                  navigate('/');
                  localStorage.removeItem('jwtToken');
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LogoutIcon sx={{ fontSize: 50, color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: open ? '1.25rem' : '1rem', // Adjust the font size here
                    color: 'white',
                    fontWeight: 'bold !important', // Force bold text
                    ml: open ? 2 : 0, // Add margin to the left when open
                    '& .MuiListItemText-primary': {
                      fontWeight: 'bold !important', // Ensure the text is bold
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default Sidelist;
