// import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
// import { web3AuthInstance } from "./web3auth";

// export const AuthProvider = (): Wallet => ({
//   id: "web3auth",
//   name: "web3auth",
//   rdns: "web3auth",
//   iconUrl: "https://web3auth.io/images/web3authlog.png",
//   iconBackground: "#fff",
//   installed: true,
//   downloadUrls: {},
//   createConnector: (walletDetails: WalletDetailsParams) =>
//     createWagmiConnector((config) => ({
//       ...Web3AuthConnector({
//         web3AuthInstance,
//       })(config),
//       ...walletDetails,
//     })),
// });



// /*import { createContext, useContext, useEffect, useState } from "react";
// import { web3auth } from "./web3auth";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// const AuthContext = createContext(null);

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       await web3auth.initModal();
//       setAuth(web3auth);
//     };

//     init();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth }}>
//       <RainbowKitProvider>{children}</RainbowKitProvider>
//     </AuthContext.Provider>
//   );
// };*/