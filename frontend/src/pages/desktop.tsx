import Head from 'next/head';

export default function DesktopNotSupported() {
  return (
    <>
      <Head>
        <title>Mobile Only | App available only on mobile devices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full flex flex-col">
        <h1 className="text-center text-3xl font-bold mb-4">
          App available only on mobile devices
        </h1>
        <p className="text-center text-xl">
          Please access from a smartphone or tablet.
        </p>
      </div>
    </>
  );
}
