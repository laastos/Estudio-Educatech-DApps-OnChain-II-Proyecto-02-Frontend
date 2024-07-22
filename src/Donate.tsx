import { useState } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { ethers } from 'ethers';
import GGNFT from './abis/GGNFT.json';
import { waitForTransactionReceipt } from "wagmi/actions";
import { rainbowkitConfig } from "./rainbowkitConfig";

const contractAddress = import.meta.env.VITE_GGNFT_CONTRACT_ADDRESS;
const nftImageAddress = import.meta.env.VITE_GGNFT_BASE_URI;
const nftPrice = import.meta.env.VITE_GGNFT_PRICE;

const Donate = () => {
  const { address, isConnected } = useAccount();
  const { data, isLoading, refetch } = useReadContract({
    abi: GGNFT,
    address: contractAddress,
    functionName: 'balanceOf',
    args: [address],
  });
  const { writeContractAsync } = useWriteContract();
  const [amount, setAmount] = useState('');
  const [isMinting, setIsMinting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDonate = async () => {
    const enteredAmount = ethers.parseEther(amount || '0');
    const requiredAmount = ethers.parseEther(nftPrice);

    if (enteredAmount != requiredAmount) {
      setErrorMessage('The donation amount must be equal to the NFT price ' + nftPrice + ' ETH');
      return;
    }

    setIsMinting(true);
    /*writeContract({
      abi: GGNFT,
      address: contractAddress,
      functionName: 'donate',
      args: [
        ethers.parseEther(amount)
      ],
    });*/
    try {
      const txHash = await writeContractAsync({
        abi: GGNFT,
        address: contractAddress,
        functionName: 'mintTo',
        args: [
          address,
          nftImageAddress
        ]
      });
      await waitForTransactionReceipt(rainbowkitConfig, {
        confirmations: 1,
        hash: txHash,
      })
      alert('Donation successful and NFT minted!');
      refetch();
      setIsMinting(false);
    } catch (error) {
      setErrorMessage('There was an error processing your donation.');
      console.error(error);
      setIsMinting(false);
    }
  };

  return (
    <div>
      {isConnected ? (
        <div className="flex flex-col items-center justify-center">
          <h2>Amount of NFTs:&nbsp;
          {isLoading ? (<span className="opacity-50">loading...</span>) : (data?.toString())}
          </h2>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in ETH"
            className="mt-1 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-gray-700 mb-3"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            onClick={handleDonate}
            disabled={isMinting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">
            Donate
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p>Please connect your wallet to donate.</p>
        </div>
      )}
    </div >
  );
};

export default Donate;