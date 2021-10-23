import React from 'react';
import clsx from 'clsx';

import { AppContext } from './AppContext';

export const FormFields = () => {
  const appCtx = React.useContext(AppContext);

  return (
    <div className="flex flex-col border border-gray-200 p-5 space-y-3">
      <input
        className="py-2 cursor-pointer"
        type="button"
        value="Add Field"
        onClick={() => {
          appCtx.setFormFields((prevState) => {
            return [
              ...prevState,
              {
                name: 'test',
                label: 'Test',
                placeholder: 'Please input test',
                type: 'text',
                required: false,
                requiredErrorMessage: 'This field is required',
                disabled: false,
                optionTitles: '',
                optionValues: '',
              },
            ];
          });
        }}
      />

      <input
        className="py-2 cursor-pointer"
        type="button"
        value="Remove Field"
        onClick={() => {
          appCtx.setFormFields((prevState) => {
            prevState.splice(appCtx.selectedIndex, 1);
            return [...prevState];
          });

          appCtx.setSelectedIndex(0);
        }}
      />

      {appCtx.formFields.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              'border border-gray-500 py-2 flex justify-center',
              appCtx.selectedIndex === index && 'bg-red-200',
            )}
            onClick={() => appCtx.setSelectedIndex(index)}
          >
            {`${item.name} (${item.type})`}
          </div>
        );
      })}
    </div>
  );
};
