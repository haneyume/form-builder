import React from 'react';

import { FormFieldProps, FormStyleProps } from './Type';

interface AppContextProps {
  fields: FormFieldProps[];
  setFields: React.Dispatch<React.SetStateAction<FormFieldProps[]>>;
  formStyles: FormStyleProps;
  setFormStyles: React.Dispatch<React.SetStateAction<FormStyleProps>>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextProps>(undefined!);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [fields, setFields] = React.useState<FormFieldProps[]>([]);
  const [formStyles, setFormStyles] = React.useState<FormStyleProps>({
    formClassName: 'flex flex-col px-5 py-6',
    fieldClassName: 'flex flex-col mb-5',
    inputClassName: 'bg-gray-200 px-2 py-3 rounded',
    labelClassName: 'text-gray-500',
    errorMessageClassName: 'text-xs text-red-500',
    submitButtonClassName:
      'py-3 cursor-pointer text-white bg-blue-500 hover:bg-blue-400',
  });
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        fields,
        setFields,
        formStyles,
        setFormStyles,
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
