// import { useEffect, useState } from 'react';
// import { useBalance, UseBalanceReturnType, useAccount } from 'wagmi';
// import { BrowserProvider, ethers } from 'ethers';
// import type { Acco}
// import GGNFT from './abis/GGNFT.json';

// const contractAddress = import.meta.env.VITE_GGNFT_CONTRACT_ADDRESS;

// const MyNFTs = () => {
//   const balance = useBalance(contractAddress);
//   const { address } = useAccount();
//   const [nfts, setNfts] = useState([]);

//   useEffect(() => {
//     const fetchNFTs = async () => {
//       if (address && balance) {
//         const provider = new providers.Web3Provider()
//         const contract = new ethers.Contract(contractAddress, GGNFT);
//         const nftPromises = [];

//         for (let i = 0; i < balance; i++) {
//           const tokenId = await contract.tokenOfOwnerByIndex(address, i);
//           const tokenURI = await contract.tokenURI(tokenId);
//           nftPromises.push(fetch(tokenURI).then(res => res.json()));
//         }

//         const nftData = await Promise.all(nftPromises);
//         setNfts(nftData);
//       }
//     };

//     fetchNFTs();
//   }, [address]);

//   return (
//     <div>
//       <h2>My NFTs</h2>
//       <div>
//         {nfts.map((nft, index) => (
//           <div key={index}>
//             <img src={nft.image} alt={nft.name} />
//             <h3>{nft.name}</h3>
//             <p>{nft.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyNFTs;