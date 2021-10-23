import React from 'react';
import clsx from 'clsx';

import { AppContext } from './AppContext';

export const FormStyles = () => {
  const appCtx = React.useContext(AppContext);

  const className = 'bg-gray-200 px-2 py-1 mb-5';

  return (
    <div className="flex flex-col border border-gray-200 p-5">
      <label>formClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.formClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.formClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />

      <label>fieldClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.fieldClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.fieldClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />

      <label>inputClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.inputClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.inputClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />

      <label>labelClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.labelClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.labelClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />

      <label>errorMessageClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.errorMessageClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.errorMessageClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />

      <label>submitButtonClassName</label>
      <input
        className={className}
        value={appCtx.formStyles.submitButtonClassName}
        onChange={(evt) => {
          appCtx.setFormStyles((prevState) => {
            prevState.submitButtonClassName = evt.target.value;
            return { ...prevState };
          });
        }}
      />
    </div>
  );
};
