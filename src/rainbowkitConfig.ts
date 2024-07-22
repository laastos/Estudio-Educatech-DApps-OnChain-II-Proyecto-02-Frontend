import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { arbitrum, arbitrumSepolia } from "viem/chains";

export const rainbowkitConfig: ReturnType<typeof getDefaultConfig> = getDefaultConfig({
  appName: 'Gratitude Gems NFT',
  projectId: import.meta.env.VITE_RAINBOWKIT_PROJECT_ID,
  chains: [arbitrumSepolia, arbitrum]
});