import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Drawer, Button } from 'antd';

import { AppContext } from '../components/AppContext';
import { Form } from '../components/Form';
import { FormStyles } from '../components/FormStyles';
import { FormFields } from '../components/FormFields';
import { FormFieldProprties } from '../components/FormFieldProprties';

const Home: NextPage = () => {
  const appCtx = React.useContext(AppContext);

  const [showCodeVisible, setShowCodeVisible] = React.useState(false);

  return (
    <div className="container mx-auto">
      <div className="py-5 flex items-center space-x-5 border-b border-gray-300 mb-5">
        <div className="text-2xl font-bold">Form Builder</div>

        <div className="flex-1" />

        <Button type="primary" onClick={() => setShowCodeVisible(true)}>
          Show Code
        </Button>
      </div>

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
              key={JSON.stringify(appCtx.formFields)}
              fields={appCtx.formFields}
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

      <Drawer
        title="Show Code"
        placement="right"
        width={600}
        onClose={() => setShowCodeVisible(false)}
        visible={showCodeVisible}
      >
        {showCodeVisible && <ShowCode />}
      </Drawer>
    </div>
  );
};

export default Home;

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

const ShowCode = () => {
  const appCtx = React.useContext(AppContext);

  const [styles, setStyles] = React.useState('');
  const [fields, setFields] = React.useState('');

  React.useEffect(() => {
    setStyles(JSON.stringify(appCtx.formStyles, null, 2));
    setFields(JSON.stringify(appCtx.formFields, null, 2));
  }, []);

  return (
    <>
      <div>Form styles</div>
      <textarea
        className="w-full h-80 border border-gray-300 p-3 whitespace-nowrap"
        value={styles}
        onChange={(e) => setStyles(e.target.value)}
      />
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => appCtx.setFormStyles(JSON.parse(styles))}
        >
          Import
        </Button>
      </div>

      <div>Form fields</div>
      <textarea
        className="w-full h-80 border border-gray-300 p-3 whitespace-nowrap"
        value={fields}
        onChange={(e) => setFields(e.target.value)}
      />
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => appCtx.setFormFields(JSON.parse(fields))}
        >
          Import
        </Button>
      </div>
    </>
  );
};
