import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LeadLayout from '@Layout/Lead';
import { MuiButton } from '@Component/_Global/MuiButton';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LeadLayout fullHeight>
      <Paper sx={{ mt: '15px', p: '15px' }}>
        <Typography
          component="h1"
          sx={{
            fontSize: '22px',
            fontWeight: 600,
            textAlign: { xs: 'center', sm: 'initial' },
          }}
        >
          {t('about-app.title')}
        </Typography>
        <Typography>{t('about-app.description')}</Typography>
        <MuiButton
          href="/contact"
          variant="contained"
          color="primary"
          sx={{ mt: '15px', width: { xs: '100%', sm: 'unset' } }}
        >
          <Typography>{t('about-app.contact-page-btn')}</Typography>
        </MuiButton>
      </Paper>
    </LeadLayout>
  );
};

export default About;
