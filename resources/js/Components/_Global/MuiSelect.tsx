import React, { useCallback, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type MuiSelectProps = {
  label: string;
  name: string;
  defaultValue: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
};

const MuiSelect: React.FC<MuiSelectProps> = ({
  label,
  name,
  defaultValue = '',
  options,
  onChange,
}): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (e: SelectChangeEvent) => {
      const selectedValue = e.target.value as string;
      setValue(selectedValue);

      if (typeof onChange === 'function') {
        onChange(selectedValue);
      }
    },
    [onChange]
  );

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          name={name}
          label={label}
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export { MuiSelect };
