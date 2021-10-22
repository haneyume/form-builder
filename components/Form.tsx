import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  defaultValues?: any;
  onSubmit: (data: any) => void;
}

export const Form = ({ defaultValues, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === 'required' && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span>Max length exceeded</span>
      )}

      <input type="submit" />
    </form>
  );
};
