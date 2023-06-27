import React from 'react';
import { Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from '@Component/_Global/ThemeSwitcher';
import { LanguageSelector } from '@Component/_Global/LanguageSelector';

type SettingsSidebarProps = {
  open: boolean;
  onClose: () => void;
};

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p="15px 0 15px 15px"
      >
        <Typography sx={{ fontWeight: 600 }}>
          {t('settings-sidebar.title')}
        </Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Stack>
      <Divider />
      <Stack width="360px" p="15px">
        <ThemeSwitcher />
        <LanguageSelector />
      </Stack>
    </Drawer>
  );
};

export { SettingsSidebar };
