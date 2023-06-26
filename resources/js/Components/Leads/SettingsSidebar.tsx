import React from 'react';
import { Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeSwitcher } from '@Component/_Global/ThemeSwitcher';

type SettingsSidebarProps = {
  open: boolean;
  onClose: () => void;
};

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p="15px 0 15px 15px"
      >
        <Typography sx={{ fontWeight: 600 }}>Settings</Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Stack>
      <Divider />
      <Stack width="360px" p="15px">
        <ThemeSwitcher />
      </Stack>
    </Drawer>
  );
};

export { SettingsSidebar };
