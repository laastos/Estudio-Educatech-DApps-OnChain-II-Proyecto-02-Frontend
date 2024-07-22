import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/web3auth";

const web3auth = new Web3Auth({
  clientId: import.meta.env.VITE_WEB3AUTH_CLIENT_ID,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: import.meta.env.VITE_ARBITRUM_SEPOLIA_CHAIN_ID,
    rpcTarget: import.meta.env.VITE_ARBITRUM_SEPOLIA_RPC_URL,
  }
});

export default web3auth;