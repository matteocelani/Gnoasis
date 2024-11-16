import React, { Fragment } from 'react';
//Importing Components
import Meta from '@/components/Meta';
export default function Home() {
  return (
    <Fragment>
      <Meta />

      <div className="w-full flex flex-col">
        <h3 className="text-2xl text-center mt-4">Payments</h3>
      </div>
    </Fragment>
  );
}
