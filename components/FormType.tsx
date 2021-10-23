import React from 'react';

export interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  requiredErrorMessage: string;
  disabled: boolean;
  optionTitles: string;
  optionValues: string;
}

export interface FormStyleProps {
  formClassName: string;
  fieldClassName: string;
  inputClassName: string;
  labelClassName: string;
  errorMessageClassName: string;
  submitButtonClassName: string;
}
