import React, { useRef, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { router } from '@inertiajs/react';
import LeadLayout from '@Layout/Lead';
import { leadHeaderHeight } from '@Component/Leads/Header';
import { MuiButton } from '@Component/_Global/MuiButton';
import { MuiUpload } from '@Component/Forms/MuiUpload';
import { handleFormFields } from '@Util/FormHelpers';
import GetIP from '@Service/GetIP';

const Form: React.FC = (): JSX.Element => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const acceptedFiles =
    'application/msword, text/plain, application/pdf, application/vnd.oasis.opendocument.text';

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setLoading(true);

    if (loading) {
      return;
    }

    const formData = new FormData();
    formData.append('ip', await GetIP());

    handleFormFields(formData, formRef, [
      { formName: 'name', fieldRef: 'current.name.value' },
      { formName: 'email', fieldRef: 'current.email.value' },
      { formName: 'phone', fieldRef: 'current.phone.value' },
      { formName: 'message', fieldRef: 'current.message.value' },
      { formName: 'attachment', fieldRef: 'current.attachment.files.0' },
    ]);

    router.post('/contact', formData, {
      onSuccess: () => {
        // TODO: try to reset form here!
      },
      onFinish: (_visit) => {
        setLoading(false);
      },
    });
  };

  return (
    <LeadLayout>
      <Stack
        sx={{
          minHeight: `calc(100vh - ${leadHeaderHeight})`,
          width: { xs: 'unset', sm: '600px' },
          p: '15px',
          m: '0 auto',
        }}
      >
        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ '& > :not(style)': { mt: '20px' } }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: '22px',
              fontWeight: 600,
              textAlign: 'center',
              mb: '20px',
            }}
          >
            Contact form
          </Typography>
          <TextField label="Name" name="name" fullWidth />
          <TextField label="E-mail" name="email" fullWidth />
          <TextField label="Phone" name="phone" fullWidth />
          <TextField
            label="Message"
            name="message"
            rows={4}
            multiline
            fullWidth
          />
          <MuiUpload
            label="Attachment"
            fieldName="attachment"
            buttonVariant="outlined"
          />
          <MuiButton variant="contained" type="submit" fullWidth>
            {loading ? '...' : 'Send'}
          </MuiButton>
        </Box>
      </Stack>
    </LeadLayout>
  );
};

export default Form;
