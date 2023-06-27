import React, { useState } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { MuiButton } from '@Component/_Global/MuiButton';
import route from '@Util/Ziggy';
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
              <MuiButton
                href={route('homepage')}
                color="inherit"
                sx={{ height: '100%', minWidth: 'unset', p: 0 }}
              >
                <img
                  src="/img/contactar-smaller.png"
                  style={{ height: 'auto' }}
                />
              </MuiButton>
            </Box>
            <Typography variant="h6">Contactar</Typography>
            <Stack direction="row" spacing={2}>
              <MuiButton
                color="info"
                variant="outlined"
                sx={{ minWidth: 'unset', p: '3px' }}
                href="https://github.com/chsjr1996/contactar"
                target="_blank"
                externalHref
              >
                <GitHubIcon />
              </MuiButton>
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
