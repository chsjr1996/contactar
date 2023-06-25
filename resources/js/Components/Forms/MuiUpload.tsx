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
  buttonVariant?: 'outlined' | 'text' | 'contained';
  buttonSx?: SxProps<Theme>;
  typographyProps?: TypographyProps;
  fileNameTypographyProps?: TypographyProps;
};

const MuiUpload: React.FC<MuiUploadProps> = ({
  label,
  fieldName,
  buttonVariant = 'text',
  buttonSx,
  typographyProps = {},
  fileNameTypographyProps = {},
}): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    const { name } = file;
    setFileName(name);
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
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {fileName && (
        <Typography {...fileNameTypographyProps}>{fileName}</Typography>
      )}
    </Stack>
  );
};

export { MuiUpload };
