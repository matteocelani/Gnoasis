import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
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
