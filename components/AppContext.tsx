import React from 'react';

interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  requiredErrorMessage: string;
}

interface FormStyleProps {
  formClassName: string;
  inputClassName: string;
  labelClassName: string;
  errorMessageClassName: string;
}

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
    formClassName: 'flex flex-col',
    inputClassName: 'bg-gray-200 px-2 py-1 mb-5',
    labelClassName: '',
    errorMessageClassName: '',
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
