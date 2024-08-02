import React, { useState } from 'react';
import { Box, CssBaseline, IconButton, Typography } from '@mui/material';
import SideList from './Sidelist.jsx';

const drawerWidth = 240;

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideList open={open} setOpen={setOpen} handleDrawerOpen={handleDrawerOpen} />
    </Box>
  );
}
