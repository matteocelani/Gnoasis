import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  ssr: true,
  serverRuntimeConfig: {
    wallet_connect_id: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
    dune_api_key: process.env.NEXT_PUBLIC_DUNE_API_KEY,
  },
};

const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'dev',
  register: true,
  skipWaiting: true,
});

export default withPWAConfig({
  ...nextConfig,
});
