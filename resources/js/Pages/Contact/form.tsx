import React, { useRef, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { get as _get } from 'lodash';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Errors, ErrorBag } from '@inertiajs/core';
import { router } from '@inertiajs/react';
import LeadLayout from '@Layout/Lead';
import { leadHeaderHeight } from '@Component/Leads/Header';
import { MuiButton } from '@Component/_Global/MuiButton';
import { MuiUpload } from '@Component/Forms/MuiUpload';
import { handleFormFields } from '@Util/FormHelpers';
import route from '@Util/Ziggy';
import useNotification from '@Hook/notification';

type FormProps = {
  errors: Errors & ErrorBag;
};

const Form: React.FC<FormProps> = ({ errors }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const notify = useNotification();

  // TODO: Use it on file input...
  const acceptedFiles =
    'application/msword, text/plain, application/pdf, application/vnd.oasis.opendocument.text';

  const handleFormSuccess = () => {
    formRef.current?.reset();

    setFileName('');
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
      inputFileRef.current.files = null;
    }

    notify(t('contact-form.success-notification'), 'success');
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setLoading(true);

    if (loading) {
      return;
    }

    const formData = new FormData();
    handleFormFields(formData, formRef, [
      { formName: 'name', fieldRef: 'current.name.value' },
      { formName: 'email', fieldRef: 'current.email.value' },
      { formName: 'phone', fieldRef: 'current.phone.value' },
      { formName: 'message', fieldRef: 'current.message.value' },
      { formName: 'attachment', fieldRef: 'current.attachment.files.0' },
    ]);

    router.post(route('contact.send'), formData, {
      onSuccess: () => handleFormSuccess(),
      onFinish: (_visit) => setLoading(false),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attachedFile = _get(e, 'target.files.0') as unknown as File;

    if (attachedFile) {
      setFileName(attachedFile.name);
    }
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
            {t('contact-form.title')}
          </Typography>
          <TextField
            label={t('contact-form.name')}
            name="name"
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            label={t('contact-form.email')}
            name="email"
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            label={t('contact-form.phone')}
            name="phone"
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
          />
          <TextField
            label={t('contact-form.message')}
            name="message"
            rows={4}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            fullWidth
          />
          <MuiUpload
            inputRef={inputFileRef}
            label={t('contact-form.attachment')}
            fileName={fileName}
            fieldName="attachment"
            buttonVariant="outlined"
            onChange={handleFileChange}
            error={!!errors.attachment}
            helperText={errors.attachment}
          />
          <MuiButton variant="contained" type="submit" fullWidth>
            {loading ? t('contact-form.loading') : t('contact-form.send')}
          </MuiButton>
        </Box>
      </Stack>
    </LeadLayout>
  );
};

export default Form;
