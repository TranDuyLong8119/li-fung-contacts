import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import { TextField } from '@material-ui/core';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField({
  name,
  control,
  label,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <TextField
      fullWidth
      margin="normal"
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      label={label}
      helperText={error?.message}
      variant="outlined"
      size="small"
      inputProps={inputProps}
    />
  );
}
