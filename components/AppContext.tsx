import React from 'react';

import { FormFieldProps, FormStyleProps } from './FormType';

interface AppContextProps {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  formFields: FormFieldProps[];
  setFormFields: React.Dispatch<React.SetStateAction<FormFieldProps[]>>;
  formStyles: FormStyleProps;
  setFormStyles: React.Dispatch<React.SetStateAction<FormStyleProps>>;
}

export const AppContext = React.createContext<AppContextProps>(undefined!);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [formFields, setFormFields] = React.useState<FormFieldProps[]>([]);
  const [formStyles, setFormStyles] = React.useState<FormStyleProps>({
    formClassName: 'flex flex-col px-5 py-6',
    fieldClassName: 'flex flex-col mb-5',
    inputClassName: 'bg-gray-200 px-3 py-3 rounded',
    labelClassName: 'text-gray-500',
    errorMessageClassName: 'text-xs text-red-500',
    submitButtonClassName:
      'py-3 rounded cursor-pointer text-white bg-blue-500 hover:bg-blue-400',
  });

  return (
    <AppContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        formFields,
        setFormFields,
        formStyles,
        setFormStyles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
