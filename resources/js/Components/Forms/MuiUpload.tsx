import React, { useState } from 'react';
import {
  Button,
  Stack,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

type MuiUploadProps = {
  label: string;
  fieldName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
  buttonVariant?: 'outlined' | 'text' | 'contained';
  buttonSx?: SxProps<Theme>;
  typographyProps?: TypographyProps;
  fileNameTypographyProps?: TypographyProps;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
};

const MuiUpload: React.FC<MuiUploadProps> = ({
  label,
  fieldName,
  onChange,
  fileName = '',
  buttonVariant = 'text',
  buttonSx,
  typographyProps = {},
  fileNameTypographyProps = {},
  inputRef,
}): JSX.Element => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    onChange(e);
  };

  return (
    <Stack>
      <Button
        component="label"
        startIcon={<UploadFileIcon />}
        variant={buttonVariant}
        sx={buttonSx}
      >
        <Typography {...typographyProps}>{label}</Typography>
        <input
          type="file"
          name={fieldName}
          onChange={handleFileChange}
          {...(inputRef && { ref: inputRef })}
          hidden
        />
      </Button>
      {fileName && (
        <Typography {...fileNameTypographyProps}>{fileName}</Typography>
      )}
    </Stack>
  );
};

export { MuiUpload };
