import React from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
// Importing Next Themes
import { ThemeProvider } from 'next-themes';
// Importing Styles
import '@/assets/styles/globals.scss';
// Raimbow Kit
import '@rainbow-me/rainbowkit/styles.css';
// Email Provider
import { EmailProvider } from '@/context/EmailContext';
// Importing Layout
const Layout = dynamic(() => import('@/layout'), { ssr: false });
// Provider Wrapper
import ProviderWrapper from '@/components/ProvidersWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmailProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ProviderWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProviderWrapper>
      </ThemeProvider>
    </EmailProvider>
  );
}
