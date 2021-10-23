import React from 'react';
import clsx from 'clsx';

import { AppContext } from './AppContext';

export const FormFieldProprties = () => {
  const appCtx = React.useContext(AppContext);

  if (appCtx.formFields.length === 0) {
    return <div />;
  }

  const field = appCtx.formFields[appCtx.selectedIndex];
  const className = 'bg-gray-200 px-2 py-1 mb-5';

  return (
    <div className="flex flex-col border border-gray-200 p-5">
      <label>name</label>
      <input
        className={className}
        value={field.name}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].name = evt.target.value;
            return [...prevState];
          });
        }}
      />

      <label>label</label>
      <input
        className={className}
        value={field.label}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].label = evt.target.value;
            return [...prevState];
          });
        }}
      />

      <label>placeholder</label>
      <input
        className={className}
        value={field.placeholder}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].placeholder = evt.target.value;
            return [...prevState];
          });
        }}
      />

      <label>type</label>
      <select
        className={className}
        value={field.type}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].type = evt.target.value;
            return [...prevState];
          });
        }}
      >
        {[
          'text',
          'number',
          'email',
          'password',
          'checkbox',
          'radio',
          'date',
          'time',
          'file',
          'tel',
          'url',
          'search',
          'range',
          'color',
          'select',
          'textarea',
        ].map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>

      <div className="flex items-center mb-5 space-x-2">
        <input
          id="required"
          className=""
          checked={field.required}
          type="checkbox"
          onChange={(evt) => {
            appCtx.setFormFields((prevState) => {
              prevState[appCtx.selectedIndex].required = evt.target.checked;
              return [...prevState];
            });
          }}
        />
        <label htmlFor="required">required</label>
      </div>

      <label>requiredErrorMessage</label>
      <input
        className={className}
        value={field.requiredErrorMessage}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].requiredErrorMessage =
              evt.target.value;
            return [...prevState];
          });
        }}
      />

      <div className="flex items-center mb-5 space-x-2">
        <input
          id="disabled"
          className=""
          checked={field.disabled}
          type="checkbox"
          onChange={(evt) => {
            appCtx.setFormFields((prevState) => {
              prevState[appCtx.selectedIndex].disabled = evt.target.checked;
              return [...prevState];
            });
          }}
        />
        <label htmlFor="disabled">disabled</label>
      </div>

      <label>optionTitles</label>
      <input
        className={className}
        value={field.optionTitles}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].optionTitles = evt.target.value;
            return [...prevState];
          });
        }}
        placeholder="Please seprate options with ;"
      />

      <label>optionValues</label>
      <input
        className={className}
        value={field.optionValues}
        onChange={(evt) => {
          appCtx.setFormFields((prevState) => {
            prevState[appCtx.selectedIndex].optionValues = evt.target.value;
            return [...prevState];
          });
        }}
        placeholder="Please seprate options with ;"
      />
    </div>
  );
};
