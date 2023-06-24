import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import LeadLayout from '@Layout/Lead';
import { MuiButton } from '@Component/_Global/MuiButton';

const About: React.FC = () => {
  return (
    <LeadLayout>
      <Paper sx={{ position: 'relative', mt: '15px', p: '15px' }}>
        <Typography component="h1" sx={{ fontSize: '22px', fontWeight: 600 }}>
          About "Contactar"
        </Typography>
        <Typography>
          This application contains a sample of Contact Form.
        </Typography>
        <MuiButton href="/contact" variant="contained" sx={{ mt: '15px' }}>
          <Typography>Contact page</Typography>
        </MuiButton>
        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <MuiButton
            href="https://github.com/chsjr1996/contactar"
            variant="outlined"
            target="_blank"
            externalHref
          >
            <Typography>Fork me on Github</Typography>
          </MuiButton>
        </Box>
      </Paper>
    </LeadLayout>
  );
};

export default About;
