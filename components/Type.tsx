import React from 'react';

export interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  requiredErrorMessage: string;
  disabled: boolean;
}

export interface FormStyleProps {
  formClassName: string;
  fieldClassName: string;
  inputClassName: string;
  labelClassName: string;
  errorMessageClassName: string;
  submitButtonClassName: string;
}
