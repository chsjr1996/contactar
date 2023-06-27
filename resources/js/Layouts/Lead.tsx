import React from 'react';
import { Box, Container, Stack, useTheme } from '@mui/material';
import Header, { leadHeaderHeight } from '@Component/Leads/Header';

type LeadLayoutProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
};

const LeadLayout: React.FC<LeadLayoutProps> = ({
  children,
  fullHeight = false,
}): JSX.Element => {
  const isDarkMode = useTheme().palette.mode === 'dark';

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: isDarkMode ? '#2b2b2b' : '#ffffff',
          minHeight: fullHeight
            ? `calc(100vh - ${leadHeaderHeight})`
            : 'initial',
        }}
      >
        <Container>
          <Stack>{children}</Stack>
        </Container>
      </Box>
    </>
  );
};

export default LeadLayout;
