// Metadata Head
export const metadata = {
  title: 'Gnoasis - Your Gateway to DeFi on Gnosis',
  description:
    'Gnoasis is a progressive mobile web app deeply integrated with the Gnosis Pay and Safe global ecosystem, providing an intuitive and user-friendly gateway for both Web2 and Web3 users to onboard into the Gnosis ecosystem and the broader DeFi space.',
  keywords:
    'Gnoasis, Gnosis, DeFi, Web3, Crypto, Wallet, Onboarding, Gnosis Pay, Safe, Blockchain, Ethereum, PWA',
  type: 'website',
  url: 'https://gnoasis.vercel.app',
  image: 'https://gnoasis.vercel.app/android-chrome-512x512.png',
  author: 'Gnoasis Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gnoasis.vercel.app',
    site_name: 'Gnoasis',
    title: 'Gnoasis - Your Gateway to DeFi on Gnosis',
    description:
      'Easy onboarding, wallet management, and DeFi access on Gnosis Chain.',
    images: [
      {
        url: 'https://gnoasis.vercel.app/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Gnoasis - Your Gateway to DeFi on Gnosis',
      },
    ],
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    { rel: 'manifest', url: '/site.webmanifest' },
  ],
};

// Google Analytics
export const GA_ID = 'G-H9FTVQWBCT';

export const BASE_URL = 'https://safe-client.safe.global/v1';
export const RESPONSE_STATUS_200 = 200;
export const RESPONSE_STATUS_201 = 201;

export const GNOSIS_CHAIN_ID = '100';
