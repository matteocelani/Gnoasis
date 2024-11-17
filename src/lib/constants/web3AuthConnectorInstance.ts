// Web3Auth Libraries
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, UX_MODE } from '@web3auth/base';
import { Chain } from 'wagmi/chains';
import { WalletServicesPlugin } from '@web3auth/wallet-services-plugin';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

export default function createWeb3AuthInstances(
  chains: Chain[],
  providerIds: string[],
  email: string
) {
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: `0x${chains[0].id.toString(16)}`,
    rpcTarget: chains[0].rpcUrls.default.http[0],
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorerUrl: chains[0].blockExplorers?.default.url[0] as string,
    logo: 'https://web3auth.io/images/web3authlog.png',
  };

  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });

  const web3AuthInstance = new Web3AuthNoModal({
    clientId:
      'BE1d6IdGb7BxZ_ndUgYHz2ZnoZYWjhZ4LqAGAzG5nWPIgI6jFOkW4GCZofRtMx4XL-xh8-RZCr3oK8CTFgAfgH4', // Testnet
    chainConfig,
    privateKeyProvider,
    uiConfig: {
      appName: 'Gnoasis',
      defaultLanguage: 'en',
      logoLight: 'https://web3auth.io/images/web3authlog.png',
      logoDark: 'https://web3auth.io/images/web3authlogodark.png',
      mode: 'light',
    },
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    enableLogging: false,
  });

  const openloginAdapter = new OpenloginAdapter({
    adapterSettings: {
      uxMode: UX_MODE.REDIRECT,
    },
  });

  web3AuthInstance.configureAdapter(openloginAdapter);

  const walletServicesPlugin = new WalletServicesPlugin({
    walletInitOptions: {
      whiteLabel: {
        showWidgetButton: false,
      },
    },
  });
  web3AuthInstance.addPlugin(walletServicesPlugin);

  // if provider id is email_passwordless we need to add a extraLoginOptions to the adapter
  const connectors = providerIds.map((providerId) =>
    Web3AuthConnector({
      web3AuthInstance,
      loginParams: {
        loginProvider: providerId,
        ...(providerId === 'email_passwordless' && {
          extraLoginOptions: { login_hint: email },
        }),
      },
    })
  );

  return {
    connectors,
    walletServicesPlugin,
  };
}
