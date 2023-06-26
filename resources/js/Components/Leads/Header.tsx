import React, { useState } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { MuiButton } from '@Component/_Global/MuiButton';
import { SettingsSidebar } from './SettingsSidebar';

export const leadHeaderHeight = '80px';

const Header = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SettingsSidebar
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <AppBar position="static" elevation={0} color="default">
        <Toolbar sx={{ height: leadHeaderHeight }}>
          <Stack
            direction="row"
            height="100%"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ height: '100%', mr: '10px' }}>
              <MuiButton href="/" color="inherit" sx={{ height: '100%' }}>
                <img
                  src="/img/contactar-small.png"
                  style={{ height: '100%' }}
                />
              </MuiButton>
            </Box>
            <Typography variant="h6">Contactar</Typography>
            <Stack>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => setSettingsOpen(true)}
                sx={{ minWidth: 'unset', p: '3px' }}
              >
                <SettingsOutlinedIcon />
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
