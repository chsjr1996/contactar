import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MuiButton } from '@Component/_Global/MuiButton';

export const leadHeaderHeight = '80px';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="default">
        <Toolbar sx={{ height: leadHeaderHeight }}>
          <Box sx={{ height: '100%', mr: '10px' }}>
            <MuiButton href="/" color="inherit" sx={{ height: '100%' }}>
              <img src="/img/contactar-small.png" style={{ height: '100%' }} />
            </MuiButton>
          </Box>
          <Typography variant="h6">Contactar</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
