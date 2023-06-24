import React from 'react';
import Header from '@Component/Leads/Header';
import { Container, Stack } from '@mui/material';

interface LeadLayoutProps {
  children: React.ReactNode;
}

const LeadLayout: React.FC<LeadLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Stack>{children}</Stack>
      </Container>
    </>
  );
};

export default LeadLayout;
