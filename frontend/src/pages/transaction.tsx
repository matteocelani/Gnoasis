import React, { Fragment } from 'react';
//Importing Components
import Meta from '@/components/Meta';

export default function Transaction() {
  return (
    <Fragment>
      <Meta />

      <div className="w-full flex flex-col">
        <h3 className="text-2xl text-center mt-4">Transaction</h3>
      </div>
    </Fragment>
  );
}
