import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { AppContext } from '../components/AppContext';
import { Form } from '../components/Form';

const Home: NextPage = () => {
  const appCtx = React.useContext(AppContext);

  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-3 gap-5">
        <div>
          <div className="text-lg mb-1">Form Styles</div>
          <FormStyles />

          <div className="h-5" />

          <div className="text-lg mb-1">Form Fields</div>
          <FormFields />
        </div>

        <div>
          <div className="text-lg mb-1">Form</div>
          <div className="border border-gray-200">
            <Form
              key={JSON.stringify(appCtx.fields)}
              fields={appCtx.fields}
              styles={appCtx.formStyles}
              onSubmit={(data) => alert(JSON.stringify(data))}
            />
          </div>
        </div>

        <div>
          <div className="text-lg mb-1">Form Field Properties</div>
          <FormFieldProprties />
        </div>
      </div>
    </div>
  );
};

export default Home;

const FormStyles = () => {
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

const FormFields = () => {
  const appCtx = React.useContext(AppContext);

  return (
    <div className="flex flex-col border border-gray-200 p-5 space-y-3">
      <input
        className="py-2 cursor-pointer"
        type="button"
        value="Add Field"
        onClick={() => {
          appCtx.setFields((prevState) => {
            return [
              ...prevState,
              {
                name: 'test',
                label: 'Test',
                placeholder: 'Please input test',
                type: 'text',
                required: false,
                requiredErrorMessage: 'required',
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
          appCtx.setFields((prevState) => {
            prevState.splice(appCtx.selectedIndex, 1);
            return [...prevState];
          });

          appCtx.setSelectedIndex(0);
        }}
      />

      {appCtx.fields.map((item, index) => {
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

// const SortableItem = SortableElement(({ value }: any) => {
//   return <li>{value}</li>;
// });

// const SortableList = SortableContainer(({ items }: any) => {
//   return (
//     <ul>
//       {items.map((value, index) => (
//         <SortableItem key={`item-${value}`} index={index} value={value} />
//       ))}
//     </ul>
//   );
// });

const FormFieldProprties = () => {
  const appCtx = React.useContext(AppContext);

  if (appCtx.fields.length === 0) {
    return <div />;
  }

  const field = appCtx.fields[appCtx.selectedIndex];
  const className = 'bg-gray-200 px-2 py-1 mb-5';

  return (
    <div className="flex flex-col border border-gray-200 p-5">
      <label>name</label>
      <input
        className={className}
        value={field.name}
        onChange={(evt) => {
          appCtx.setFields((prevState) => {
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
          appCtx.setFields((prevState) => {
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
          appCtx.setFields((prevState) => {
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
          appCtx.setFields((prevState) => {
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

      <label>required</label>
      <div className="flex items-center mb-5 space-x-2">
        <input
          id="required"
          // className={className}
          checked={field.required}
          type="checkbox"
          onChange={(evt) => {
            appCtx.setFields((prevState) => {
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
          appCtx.setFields((prevState) => {
            prevState[appCtx.selectedIndex].requiredErrorMessage =
              evt.target.value;
            return [...prevState];
          });
        }}
      />
    </div>
  );
};
