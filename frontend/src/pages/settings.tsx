import React, { Fragment } from 'react';
//Importing Components
import Meta from '@/components/Meta';

export default function Settings() {
  return (
    <Fragment>
      <Meta />

      <div className="w-full flex flex-col">
        <h3 className="text-2xl text-center mt-4">Settings</h3>
      </div>
    </Fragment>
  );
}
