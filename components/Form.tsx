import React from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { FormFieldProps, FormStyleProps } from './FormType';

interface FormProps {
  defaultValues?: any;
  fields: FormFieldProps[];
  styles: FormStyleProps;
  onSubmit: (data: any) => void;
}

export const Form = ({
  defaultValues,
  fields,
  styles,
  onSubmit,
}: FormProps) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form className={styles.formClassName} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        if (item.type === 'checkbox') {
          return (
            <CheckboxField
              key={index}
              field={item}
              styles={styles}
              register={register}
              errors={errors}
            />
          );
        } else if (item.type === 'select') {
          return (
            <SelectField
              key={index}
              field={item}
              styles={styles}
              register={register}
              errors={errors}
            />
          );
        } else if (item.type === 'textarea') {
          return (
            <TextAreaField
              key={index}
              field={item}
              styles={styles}
              register={register}
              errors={errors}
            />
          );
        }

        return (
          <InputField
            key={index}
            field={item}
            styles={styles}
            register={register}
            errors={errors}
          />
        );
      })}

      <input
        className={styles.submitButtonClassName}
        type="submit"
        value={t('Submit')}
      />
    </form>
  );
};

const CheckboxField = ({
  field,
  styles,
  register,
  errors,
}: {
  field: FormFieldProps;
  styles: FormStyleProps;
  register: UseFormRegister<any>;
  errors: any;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.fieldClassName}>
      <div className="flex items-center space-x-2">
        <input
          id={`form_${field.name}`}
          className={clsx(
            styles.inputClassName,
            field.disabled && 'opacity-40',
          )}
          placeholder={t(field.placeholder)}
          disabled={field.disabled}
          type={field.type}
          {...register(field.name, { required: field.required })}
        />
        <label className={styles.labelClassName} htmlFor={`form_${field.name}`}>
          {t(field.label)}
        </label>
      </div>
      {errors[field.name] && errors[field.name].type === 'required' && (
        <span className={styles.errorMessageClassName}>
          {t(field.requiredErrorMessage)}
        </span>
      )}
    </div>
  );
};

const InputField = ({
  field,
  styles,
  register,
  errors,
}: {
  field: FormFieldProps;
  styles: FormStyleProps;
  register: UseFormRegister<any>;
  errors: any;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.fieldClassName}>
      <label className={styles.labelClassName} htmlFor={field.name}>
        {t(field.label)}
      </label>
      <input
        className={clsx(styles.inputClassName, field.disabled && 'opacity-40')}
        placeholder={t(field.placeholder)}
        disabled={field.disabled}
        type={field.type}
        {...register(field.name, { required: field.required })}
      />
      {errors[field.name] && errors[field.name].type === 'required' && (
        <span className={styles.errorMessageClassName}>
          {t(field.requiredErrorMessage)}
        </span>
      )}
    </div>
  );
};

const SelectField = ({
  field,
  styles,
  register,
  errors,
}: {
  field: FormFieldProps;
  styles: FormStyleProps;
  register: UseFormRegister<any>;
  errors: any;
}) => {
  const { t } = useTranslation();

  const optionTitles =
    field.optionTitles === '' ? [] : field.optionTitles.split(';');
  const optionValues =
    field.optionValues === '' ? [] : field.optionValues.split(';');

  return (
    <div className={styles.fieldClassName}>
      <label className={styles.labelClassName} htmlFor={field.name}>
        {t(field.label)}
      </label>
      <select
        className={clsx(styles.inputClassName, field.disabled && 'opacity-40')}
        placeholder={t(field.placeholder)}
        disabled={field.disabled}
        {...register(field.name, { required: field.required })}
      >
        <option value="" selected disabled>
          {t(field.placeholder)}
        </option>
        {optionValues.map((item, index) => {
          const title =
            optionTitles.length > index ? optionTitles[index] : item;

          return (
            <option key={index} value={item}>
              {t(title)}
            </option>
          );
        })}
      </select>
      {errors[field.name] && errors[field.name].type === 'required' && (
        <span className={styles.errorMessageClassName}>
          {t(field.requiredErrorMessage)}
        </span>
      )}
    </div>
  );
};

const TextAreaField = ({
  field,
  styles,
  register,
  errors,
}: {
  field: FormFieldProps;
  styles: FormStyleProps;
  register: UseFormRegister<any>;
  errors: any;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.fieldClassName}>
      <label className={styles.labelClassName} htmlFor={field.name}>
        {t(field.label)}
      </label>
      <textarea
        className={clsx(styles.inputClassName, field.disabled && 'opacity-40')}
        placeholder={t(field.placeholder)}
        disabled={field.disabled}
        rows={5}
        {...register(field.name, { required: field.required })}
      />
      {errors[field.name] && errors[field.name].type === 'required' && (
        <span className={styles.errorMessageClassName}>
          {t(field.requiredErrorMessage)}
        </span>
      )}
    </div>
  );
};
