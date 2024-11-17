// Importing Next
import Head from 'next/head';
import Script from 'next/script';
// Importing Const
import { metadata, GA_ID } from '@/lib/constants';

export default function Meta() {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="image" content={metadata.image} />
      <meta name="author" content={metadata.author} />

      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#f2f2f7" />
      <meta name="theme-color" content="#f2f2f7" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.url} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      <>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          id="gtag-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
          onError={(e) =>
            console.error('Error loading Google Tag Manager: ', e)
          }
        />
        <Script id="gtag-inline-script" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {page_path: window.location.pathname});
            `}
        </Script>
      </>
    </Head>
  );
}
