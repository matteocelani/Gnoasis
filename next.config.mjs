import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  ssr: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    });
    return config;
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
