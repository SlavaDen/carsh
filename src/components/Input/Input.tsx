import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const Input = ({
  validation = {},
  parseError,
  type,
  required,
  name,
  control,
  helperText,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => (
        <TextField
          {...rest}
          name={name}
          value={value ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          type={type}
          error={invalid}
          helperText={helperText}
        />
      )}
    />
  );
};

export default Input;
