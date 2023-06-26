import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LeadLayout from '@Layout/Lead';
import { MuiButton } from '@Component/_Global/MuiButton';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LeadLayout fullHeight>
      <Paper sx={{ position: 'relative', mt: '15px', p: '15px' }}>
        <Typography component="h1" sx={{ fontSize: '22px', fontWeight: 600 }}>
          {t('about-app.title')}
        </Typography>
        <Typography>{t('about-app.description')}</Typography>
        <MuiButton href="/contact" variant="contained" sx={{ mt: '15px' }}>
          <Typography>{t('about-app.contact-page-btn')}</Typography>
        </MuiButton>
        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <MuiButton
            href="https://github.com/chsjr1996/contactar"
            variant="outlined"
            target="_blank"
            externalHref
          >
            <Typography>{t('about-app.fork-btn')}</Typography>
          </MuiButton>
        </Box>
      </Paper>
    </LeadLayout>
  );
};

export default About;
