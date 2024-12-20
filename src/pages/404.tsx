import { Fragment } from 'react';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>Gnoasis | 404: This page could not be found.</title>

        <meta name="image" content="/img/logo.png" />

        {/* Open Graph */}
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/logo.png" />
      </Head>

      <div className="w-full flex flex-col">
        <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold">
          404
        </h1>
        <h2 className="text-2xl text-center mt-4">
          The requested URL /error was not found on this server.
        </h2>
      </div>
    </Fragment>
  );
}
